import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Box, TextField, Typography, Avatar, IconButton, Fab, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Send, Chat, Settings } from '@mui/icons-material';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#1976d2');

  const isMobile = useMediaQuery('(max-width:600px)');


  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'robo', text: 'Hello! How can I help you today?' },
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
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSettings = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    handleCloseSettings();
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

  const chatBox = (
    <Box
      sx={{
        position: 'fixed',
        bottom: 65,
        right: 20,
        width: { xs: '95%', sm: 300 },
        height: { xs: '80%', sm: 400 },
        borderRadius: 1,
        boxShadow: 3,
        bgcolor: 'background.paper',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s, height 0.3s, top 0.3s, left 0.3s',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          bgcolor: selectedColor,
          color: '#fff',
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
        }}
      >
        <Avatar src="/path-to-feddy-avatar.jpg" />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Hi, I am Robo, your personal assistant.
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
          sx={{ zIndex: 9999 }}
        >
          <ColorMenuItem color="#1976d2" />
          <ColorMenuItem color="#f44336" />
          <ColorMenuItem color="#2196f3" />
          <ColorMenuItem color="#4caf50" />
          <ColorMenuItem color="#ff9800" />
        </Menu>
      </Box>
      <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start', mb: 1 }}>
            <Box sx={{ bgcolor: message.sender === 'user' ? selectedColor : '#e0e0e0', color: message.sender === 'user' ? '#fff' : '#000', p: 1.5, borderRadius: 1 }}>
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
        <IconButton color="primary" onClick={handleSend} sx={{ color: selectedColor }}>
          <Send />
        </IconButton>
      </Box>
    </Box>
  )
  return (
    <div>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChatbot}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
          color: '#fff',

        }}
      >
        <Chat />
      </Fab>
      {open && (
        isMobile ? chatBox : (
          <Draggable onDrag={handleDrag} defaultPosition={{ x: position.x, y: position.y }}>
            {chatBox}
          </Draggable>
        )
      )}
    </div>
  );
};

export default Chatbot;
