# NirogGyan - Healthcare Appointment Booking System

A modern, responsive healthcare appointment booking platform built with React.js that allows users to search for doctors, view their profiles, and book appointments. Features an intelligent AI chatbot for user assistance.

## 🚀 Features

- **Doctor Search & Discovery**: Browse and search for healthcare professionals
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **AI-Powered Chatbot**: Intelligent assistant using Gemini API for doctor recommendations
- **Interactive Doctor Profiles**: Detailed information with availability schedules
- **Appointment Booking**: Seamless booking experience with confirmation
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🛠️ Tools/Libraries Used

### Frontend Technologies
- **React.js 18**: Component-based UI library
- **React Router DOM**: Client-side routing and navigation
- **CSS3**: Custom styling with CSS variables and responsive design
- **HTML5**: Semantic markup structure

### External APIs & Services
- **Google Gemini AI API**: Powering the intelligent chatbot

### Development Tools
- **Create React App**: Project scaffolding and build tools
- **npm**: Package management
- **Git**: Version control

### Key Libraries & Dependencies
- **react-router-dom**: For navigation between pages
- **Custom CSS Framework**: Built-in responsive design system
- **Fetch API**: For external API communications

## 🎨 Design System

### Components
- **Doctor Cards**: Consistent grid layout with hover effects
- **Search Interface**: Modern search bar with icon integration
- **Chatbot Widget**: Floating assistant with compact mobile design
- **Booking Forms**: Professional modal-based booking experience


## 🤖 AI Chatbot Features

### Intelligent Assistance
- **Symptom Analysis**: AI suggests appropriate doctors based on user problems
- **Doctor Recommendations**: Provides specific doctor names and specializations
- **Healthcare Information**: Offers guidance on medical topics

### Technical Implementation
- **Gemini API Integration**: Advanced AI model for natural conversations
- **Context Management**: Maintains conversation history
- **Knowledge Base**: Healthcare-specific information and doctor data
- **Responsive Design**: Works seamlessly across all device sizes

## 🔧 Technical Architecture

### Component Structure
```
src/
├── components/
│   ├── DoctorCard.jsx          # Individual doctor display
│   ├── BookingForm.jsx         # Appointment booking modal
│   ├── Confirmation.jsx        # Booking confirmation
│   ├── Chatbot.jsx             # Main chatbot component
│   ├── ChatMessage.jsx         # Individual chat messages
│   ├── ChatForm.jsx            # Chat input interface
│   └── ChatbotIcon.jsx         # Chatbot icon SVG
├── pages/
│   ├── HomePage.jsx            # Main landing page
│   └── DoctorProfilePage.jsx   # Doctor detail page
├── data/
│   └── doctors.json            # Doctor information database

```

### State Management
- **React Hooks**: useState, useEffect, useRef for local state
- **Context API**: Global state management (when needed)
- **Local Storage**: Persistent user preferences

## 🚧 Challenges Faced and Solutions

### 1. **Mobile Chatbot Send Button Visibility**
**Challenge**: Send button was not visible or covered by other elements on mobile devices.

**Solution**:
- Replaced Material Icons with Unicode characters for better compatibility
- Implemented higher z-index values for proper layering
- Added `!important` declarations for mobile-specific styling
- Created compact mobile design with fixed heights

### 2. **Search Bar Icon Overlap**
**Challenge**: Search bar placeholder text was mixing with the search icon.

**Solution**:
- Added `padding-right` to input field
- Adjusted icon positioning with proper z-index
- Created proper spacing between text and icon


### 3. **AI Chatbot Integration**
**Challenge**: Integrating external AI API while maintaining responsive design.

**Solution**:
- Implemented proper error handling for API calls
- Created responsive chatbot widget design
- Added loading states and user feedback
- Optimized for mobile interaction patterns

## 🔮 Future Improvements

- **Email Integration**: Send appointment confirmation emails to users
- **Voice Message Integration**: Add voice input/output to chatbot
- **User Authentication**: Login/signup system with user profiles


## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [https://github.com/Varma0214/NirogGyan]

# Navigate to project directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```


## 👥 Technologies

- **Frontend Development**: React.js, CSS3, JavaScript
- **UI/UX Design**: Responsive design, modern aesthetics
- **AI Integration**: Gemini API, chatbot functionality
- **Testing**: Cross-browser compatibility, mobile responsiveness

---

**NirogGyan** - Making healthcare accessible through technology 🏥
