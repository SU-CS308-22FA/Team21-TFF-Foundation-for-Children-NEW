import { useState } from 'react';
import TruncateMarkup from 'react-truncate-markup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ClearIcon from '@mui/icons-material/Clear';

const AnnouncementItem = ({ ann, isPermitted, getAnnouncements }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(ann.title);
  const [content, setContent] = useState(ann.content);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    setTitle(ann.title);
    setContent(ann.content);
  };

  const handleEdit = () => {
    setIsLoading(true);
    fetch('/api/announcement', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: ann._id, title, content }),
    }).then(() => {
      getAnnouncements(); // refresh the list of announcements
      setTimeout(() => {
        setIsLoading(false);
        setIsEditing(false);
      }, 1000);
    });
  };

  const handleDelete = () => {
    setIsLoading(true);
    fetch('/api/announcement', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: ann._id }),
    }).then(() => {
      getAnnouncements(); // refresh the list of announcements
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  if (isLoading)
    return (
      <div className="announcement-item">
        <CircularProgress
          style={{ margin: 'auto', height: '95%', display: 'flex' }}
        />
      </div>
    );

  if (!ann.content) return null;

  return (
    <div className="announcement-item">
      {isPermitted && (
        <div className="announcement-item__actions">
          {isEditing ? (
            <IconButton onClick={onCancelEdit}>
              <ClearIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <EditIcon />
            </IconButton>
          )}
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {isEditing ? (
        <TextField
          label="Title"
          variant="outlined"
          defaultValue={title}
          onChange={handleTitleChange}
        />
      ) : (
        <h3>{title}</h3>
      )}
      {isEditing ? (
        <TextareaAutosize
          defaultValue={content}
          minRows={4}
          style={{ width: '100%' }}
          onChange={handleContentChange}
        />
      ) : isExpanded ? (
        <p>{content}</p>
      ) : (
        <TruncateMarkup
          lines={2}
          ellipsis={
            <span
              onClick={() => {
                setIsExpanded(true);
              }}
              className="show-more"
            >
              {' '}
              ...show more
            </span>
          }
        >
          <p>{content}</p>
        </TruncateMarkup>
      )}
      {isEditing && (
        <Button
          variant="contained"
          endIcon={<SaveAsIcon />}
          style={{ width: '100px' }}
          onClick={handleEdit}
        >
          Save
        </Button>
      )}
    </div>
  );
};
export default AnnouncementItem;
