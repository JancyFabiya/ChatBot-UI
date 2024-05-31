import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Box, TextField, Typography, Avatar, IconButton, Fab, Menu, MenuItem } from '@mui/material';
import { Send, Chat, Settings } from '@mui/icons-material';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [anchorEl, setAnchorEl] = useState(null); // State for Menu anchor element
  const [selectedColor, setSelectedColor] = useState('#1976d2'); // Default color

  useEffect(() => {
    // Set initial position to bottom-right corner
    const initialPosition = {
      x: window.innerWidth - 80, // Adjust for FAB size
      y: window.innerHeight - 80, // Adjust for FAB size
    };
    setPosition(initialPosition);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate a response from Feddy
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'feddy', text: 'Hello! How can I help you today?' },
        ]);
      }, 1000);
    }
  };

  const toggleChatbot = () => {
    setOpen(!open);
  };

  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  const handleOpenSettings = (event) => {
    setAnchorEl(event.currentTarget); // Open settings menu
  };

  const handleCloseSettings = () => {
    setAnchorEl(null); // Close settings menu
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    handleCloseSettings(); // Close settings menu after color selection
  };

  const ColorMenuItem = ({ color }) => (
    <MenuItem
      onClick={() => handleColorSelect(color)}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0 }}
    >
      <Box
        sx={{
          width: 24,
          height: 24,
          bgcolor: color,
          borderRadius: '50%',
          border: color === selectedColor ? '2px solid #fff' : 'none',
          boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)',
          cursor: 'pointer',
        }}
      />
    </MenuItem>
  );

  return (
    <div >
      <Draggable onDrag={handleDrag} defaultPosition={position}>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={toggleChatbot}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 9999,
            // backgroundColor: selectedColor,
            color: '#fff',
          }}
        >
          <Chat />
        </Fab>
      </Draggable>
      {open && (
        <Box sx={{ position: 'fixed', top: position.y + 60, left: position.x, width: 300, borderRadius: 1, boxShadow: 3, bgcolor: 'background.paper', zIndex: 9998 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: selectedColor, color: '#fff', borderTopLeftRadius: 1, borderTopRightRadius: 1 }}>
            <Avatar src="/path-to-feddy-avatar.jpg" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Hi, I am Feddy, your personal assistant.
            </Typography>
            <IconButton
              aria-label="settings"
              onClick={handleOpenSettings}
              sx={{ ml: 'auto', color: '#fff' }}
            >
              <Settings />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseSettings}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              getContentAnchorEl={null}
              sx={{ zIndex: 9999 }} // Ensure the menu is above other elements
            >
              <ColorMenuItem color="#1976d2" />
              <ColorMenuItem color="#f44336" />
              <ColorMenuItem color="#2196f3" />
              <ColorMenuItem color="#4caf50" />
              <ColorMenuItem color="#ff9800" />
            </Menu>
          </Box>
          <Box sx={{ p: 2, height: 300, overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start', mb: 1 }}>
                <Box sx={{ bgcolor: message.sender === 'user' ? '#1976d2' : '#e0e0e0', color: message.sender === 'user' ? '#fff' : '#000', p: 1.5, borderRadius: 1 }}>
                  {message.text}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', p: 2, borderTop: '1px solid #e0e0e0' }}>
            <TextField
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              sx={{ mr: 1 }}
            />
            <IconButton color="primary" onClick={handleSend} style={{ color: selectedColor }}>
              <Send />
            </IconButton>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Chatbot;
