# 🎵 Spotify Room Controller App

A full-stack web application that allows users to create or join virtual music rooms and collaboratively control Spotify playback. Built using **React**, **Django**, and the **Spotify Web API**, this project demonstrates OAuth-based authentication, real-time voting logic, and role-based access control.

## 🚀 Features

- **Room Creation & Joining**
  - Users can create rooms with custom settings:
    - Allow guests to play/pause music
    - Set number of votes required to skip a song
  - A unique room code is generated for others to join

- **Spotify Integration**
  - Only the room host logs in using Spotify OAuth 2.0
  - All playback occurs through the host’s Spotify account

- **Collaborative Playback**
  - Displays real-time information about the currently playing track
  - Guests can vote to skip songs
  - If votes meet the threshold, the song is skipped automatically

- **Permissions Control**
  - Room creators control guest permissions (e.g., play/pause access)
  - Voting functionality ensures democratic song control even without full access

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, Material-UI
- **Backend:** Django, Django REST Framework, Django Sessions
- **Integration:** Spotify Web API, OAuth 2.0, Axios
