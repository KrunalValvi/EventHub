# 🎭 EventHub

<div align="center">

**A Modern Event Booking & Management Platform**

*Your one-stop destination for movies, events, sports, and theatre bookings*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

[![License](https://img.shields.io/github/license/KrunalValvi/EventHub)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/KrunalValvi/EventHub)](https://github.com/KrunalValvi/EventHub/stargazers)
[![Forks](https://img.shields.io/github/forks/KrunalValvi/EventHub)](https://github.com/KrunalValvi/EventHub/network)

[🚀 Live Demo](#) • [📖 Documentation](./docs) • [🐛 Report Bug](https://github.com/KrunalValvi/EventHub/issues) • [💡 Request Feature](https://github.com/KrunalValvi/EventHub/issues)

</div>

---

## ✨ Key Features

### 🎬 For Users
- 🎥 **Movie Bookings** - Browse and book tickets for the latest movies
- 🎤 **Live Events** - Discover concerts, comedy shows, and live performances
- ⚽ **Sports Events** - Book tickets for cricket, marathons, and sports tournaments
- 🎭 **Theatre & Plays** - Experience Gujarati and Hindi theatrical performances
- 💺 **Seat Selection** - Interactive seat selection with real-time availability
- 🍿 **Food & Beverages** - Pre-order popcorn, drinks, and snacks
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎫 **Booking Management** - Track and manage all your bookings in one place

### 👨‍💼 For Admins
- 📊 **Dashboard Analytics** - Real-time booking statistics and revenue tracking
- 🎬 **Event Management** - Add, edit, and manage movies, events, and shows
- 👥 **User Management** - Monitor and manage registered users
- 🏟️ **Venue Management** - Configure theaters, screens, and seating arrangements
- 📈 **Reports** - Generate detailed booking and revenue reports
- ⚙️ **Settings** - Customize platform settings and configurations

## 🎬 Screenshots

### User Interface
![Home Page](./docs/images/home.png)
*Modern and intuitive home page with featured content*

![Booking Flow](./docs/images/booking.png)
*Seamless booking experience with seat selection*

### Admin Panel
![Admin Dashboard](./docs/images/admin-dashboard.png)
*Comprehensive admin dashboard with analytics*

*Note: Add actual screenshots to the `docs/images/` folder*

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KrunalValvi/EventHub.git
   cd EventHub
   ```

2. **Open with Live Server**
   - If using VS Code, install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"
   
   OR

3. **Open directly in browser**
   ```bash
   # Navigate to the project folder and open index.html
   open index.html  # macOS
   start index.html # Windows
   ```

4. **Access the application**
   ```
   http://localhost:5500 (if using Live Server)
   or
   file:///path/to/EventHub/index.html
   ```

### Admin Access

To access the admin dashboard:
- Navigate to `admin/dashboard.html`
- Or click on "Admin Login" link from the sign-up page

## 📖 Usage Examples

### User Booking Flow

1. **Browse Content**
   - Visit the home page
   - Browse movies, events, sports, or plays sections

2. **Select & Book**
   - Click on any event to view details
   - Choose date, time, and venue
   - Select your seats
   - Add food & beverages (optional)

3. **Confirm Booking**
   - Review order summary
   - Complete payment
   - Receive booking confirmation

### Admin Operations

1. **Add New Movie**
   ```javascript
   // Navigate to admin/edit-movie.html
   // Fill in movie details:
   - Title
   - Genre
   - Duration
   - Release Date
   - Description
   - Upload poster image
   ```

2. **Manage Bookings**
   ```javascript
   // Navigate to admin/view-bookings.html
   // View all bookings with filters:
   - Date range
   - Event type
   - Status (confirmed/cancelled)
   ```

## 🏗️ Project Structure

```
EventHub/
├── index.html                 # Home page
├── admin/                     # Admin panel
│   ├── dashboard.html         # Admin dashboard
│   ├── edit-movie.html        # Movie management
│   ├── manage-users.html      # User management
│   ├── view-bookings.html     # Booking management
│   └── theaters.html          # Venue management
├── client/                    # User-facing pages
│   ├── movies-listing.html    # Movies catalog
│   ├── events-listing.html    # Events catalog
│   ├── sports-listing.html    # Sports events
│   ├── plays-listing.html     # Theatre plays
│   ├── movie-detail.html      # Movie details
│   ├── seat-selection.html    # Seat booking
│   ├── order-summary.html     # Order review
│   ├── booking-confirmation.html
│   ├── my-bookings.html       # User bookings
│   └── sign-up.html           # Authentication
├── css/                       # Stylesheets
│   ├── style.css              # Main styles
│   ├── client.css             # Client-specific styles
│   └── admin.css              # Admin panel styles
├── js/                        # JavaScript files
│   ├── auth.js                # Authentication & validation
│   ├── booking.js             # Booking logic
│   ├── admin.js               # Admin functions
│   ├── contact.js             # Contact form
│   └── validation.js          # Form validations
├── images/                    # Image assets
│   ├── Banner/                # Homepage banners
│   ├── Movies/                # Movie posters
│   ├── Events/                # Event posters
│   ├── Sports/                # Sports images
│   └── Plays/                 # Theatre play posters
└── docs/                      # Documentation
```

## 🎨 Design Features

### UI/UX Highlights
- **Modern Bootstrap 5.3.2** - Responsive and mobile-first design
- **Intuitive Navigation** - Easy-to-use menu and search functionality
- **Visual Feedback** - Real-time form validation with error messages
- **Smooth Transitions** - Enhanced user experience with animations
- **Accessibility** - ARIA labels and semantic HTML

### Color Scheme
- Primary: Dark theme for elegance
- Accent: Vibrant colors for CTAs
- Background: Clean white with subtle grays

## 🔒 Security Features

- **Form Validation** - Client-side validation for all forms
- **Input Sanitization** - Protection against XSS attacks
- **Secure Authentication** - Password strength requirements
- **Data Privacy** - User data protection measures

### Validation Rules

```javascript
// Email validation
Pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/

// Password validation (6-12 characters, alphanumeric)
Pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/

// Phone validation (10 digits)
Pattern: /^[0-9]{10}$/

// Name validation (letters and spaces only)
Pattern: /^[A-Za-z\s]+$/
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Movie/event browsing and filtering
- [ ] Seat selection functionality
- [ ] Booking flow completion
- [ ] Admin dashboard access
- [ ] Event management (CRUD operations)
- [ ] Responsive design on mobile/tablet
- [ ] Form validation on all pages
- [ ] Image loading and display

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and structure
- Test your changes thoroughly
- Update documentation as needed
- Add comments for complex logic
- Ensure responsive design compatibility

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] User authentication system
- [x] Movie/event browsing
- [x] Seat selection and booking
- [x] Admin dashboard
- [x] Responsive design

### Phase 2 (Upcoming)
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] QR code generation for tickets
- [ ] User reviews and ratings
- [ ] Advanced search and filters
- [ ] Wishlist functionality

### Phase 3 (Future)
- [ ] Mobile app (React Native)
- [ ] Social media integration
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] AI-based recommendations
- [ ] Real-time seat availability updates

See the [open issues](https://github.com/KrunalValvi/EventHub/issues) for a full list of proposed features.

## 📊 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5.3.2** - Responsive framework

### Libraries & Tools
- **Bootstrap Icons** - Icon library
- **Google Fonts** - Typography
- **Git** - Version control

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the amazing CSS framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) for the icon library
- All contributors who help make this project better
- The open-source community for inspiration and support

## 📞 Support & Contact

- 📧 Email: krunalvalvi@example.com
- 💬 [GitHub Discussions](https://github.com/KrunalValvi/EventHub/discussions)
- 🐛 [Report Issues](https://github.com/KrunalValvi/EventHub/issues)
- 📱 Connect on [LinkedIn](https://linkedin.com/in/krunalvalvi)

## 📈 Project Stats

- **Total Files**: 47+
- **Lines of Code**: 10,000+
- **Images**: 37 high-quality posters
- **Pages**: 15+ fully functional pages
- **Validation Rules**: 20+ form validations

---

<div align="center">

**[⭐ Star this repository](https://github.com/KrunalValvi/EventHub) if you find it helpful!**

Made with ❤️ by [Krunal Valvi](https://github.com/KrunalValvi)

*EventHub - Where Entertainment Meets Convenience* 🎬🎤⚽🎭

</div>
