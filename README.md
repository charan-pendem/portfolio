

# Charan Pendem - Portfolio Website

---

A modern, responsive portfolio website built with Next.js, showcasing my projects, skills, and experience as a Full Stack Developer.

## 🚀 Features

---


- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Interactive project cards with live demos and code links
- **Skills Section**: Animated skills display with technology icons
- **Education Timeline**: Educational background with interactive cards
- **SEO Optimized**: Meta tags and structured data for better search visibility

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Animations**: Lottie React, Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer
- **Deployment**: Vercel

---

## 📋 Sections

- HERO SECTION
- ABOUT ME
- SKILLS
- PROJECTS
- EDUCATION
- CONTACT

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (version 18 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/charan-pendem/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   EMAIL_ADDRESS=your-email@gmail.com
   GMAIL_PASSKEY=your-app-password
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Personal Data

Update your personal information in `utils/data/personal-data.js`:

```javascript
export const personalData = {
  name: "Your Name",
  profile: '/profile.png',
  designation: "Your Title",
  description: "Your bio...",
  email: 'your-email@example.com',
  // ... other fields
};
```

### Projects

Add your projects in `utils/data/projects-data.js`:

```javascript
export const projectsData = [
  {
    id: 1,
    name: 'Project Name',
    description: 'Project description...',
    tools: ['React', 'Node.js', 'MongoDB'],
    role: 'Full Stack Developer',
    code: 'https://github.com/username/repo',
    demo: 'https://your-demo-url.com',
  },
  // ... more projects
];
```

### Skills

Update your skills in `utils/data/skills.js`:

```javascript
export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  // ... your skills
];
```

---

### Education

Update your education in `utils/data/educations.js`:

```javascript
export const educations = [
  {
    id: 1,
    title: "Your Degree",
    duration: "Year - Year",
    institution: "Your Institution",
  },
  // ... more education entries
];
```

## 📧 Contact Form Setup

---

To enable the contact form functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App Passwords
   - Generate a new app password for "Mail"
3. **Add credentials to your environment variables**:
   ```env
   EMAIL_ADDRESS=your-email@gmail.com
   GMAIL_PASSKEY=your-16-character-app-password
   ```

## 🚀 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
2. **Connect to Vercel**:
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
3. **Configure Environment Variables**:
   - Add all variables from your `.env.local` file
   - Update `NEXT_PUBLIC_APP_URL` to your production domain
4. **Deploy**: Vercel will automatically build and deploy your site

### Environment Variables for Production

---

```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
EMAIL_ADDRESS=your-email@gmail.com
GMAIL_PASSKEY=your-app-password
NEXT_PUBLIC_GTM=your-gtm-id (optional)
```

## 📁 Project Structure

```
├── app/
│   ├── api/                 # API routes
│   ├── components/          # React components
│   │   ├── homepage/        # Homepage sections
│   │   └── helper/          # Utility components
│   ├── css/                 # Global styles
│   └── assets/              # Static assets
├── utils/
│   ├── data/                # Configuration data
│   └── skill-image.js       # Skill icons mapping
├── public/                  # Public assets
└── ...config files
```

## 🎨 Customization

### Colors
The portfolio uses a dark theme with accent colors:
- Primary: `#16f2b3` (green)
- Secondary: `#1a1443` (dark blue)
- Accent: Pink to violet gradients

### Fonts
The project uses Inter font family for clean, modern typography.

### Adding New Sections
Create new components in `app/components/homepage/` and import them in `app/page.js`.

## 🤝 Contributing

---

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: pendemcharan111@gmail.com
- **LinkedIn**: [Charan Pendem](https://www.linkedin.com/in/charan-pendem-21316625b)
- **GitHub**: [charan-pendem](https://github.com/charan-pendem)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!


1. **Sign up or log in** to [Netlify](https://www.netlify.com/).
2. In the **Netlify Dashboard**, click **"New site from Git"**.
3. Connect your **GitHub** account and select your repo.
4. Configure your environment variables by going to **Site Settings > Build & Deploy > Environment** and adding keys from your `.env` file.
5. Click **Deploy Site**. Netlify will build and deploy your portfolio.

---

# Tutorials :wrench:

## Gmail App Password Setup

1. **Log in to your Google Account** at [https://myaccount.google.com/](https://myaccount.google.com/).
2. Navigate to **Security** from the left sidebar.
3. Scroll down to the **"Signing in to Google"** section and make sure **2-Step Verification** is turned ON.
4. Once 2-Step Verification is enabled, you'll see an option for **App Passwords**.
5. Click on **App Passwords**. You may need to enter your Google account password again.
6. In the **Select app** dropdown, choose "Mail", and for **Select device**, choose "Other (Custom name)" and name it appropriately (e.g., "Portfolio").
7. Click **Generate**. A 16-character app password will be displayed. Save this password for later use in your environment variables (e.g., `GMAIL_PASSKEY`).

## Create a Telegram Bot

1. **Open Telegram** and search for the user **@BotFather**.
2. Start a chat with BotFather and use the `/newbot` command to create a new bot.
3. Choose a name for your bot.
4. Set a unique username for your bot (must end with `bot`, e.g., `PortfolioAssistantBot`).
5. Once your bot is created, BotFather will send you a **Token**. Save this token, as you will need it for your environment variables (e.g., `TELEGRAM_BOT_TOKEN`).
6. To get your chat ID:
   - Open your bot in Telegram and send it a message.
   - Visit the following URL in your browser, replacing `BOT_TOKEN` with your actual bot token:  
     `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
   - Look for the `chat` object in the response, which contains your **chat ID** (you can use this value for `TELEGRAM_CHAT_ID`).

## Fetching Blog from dev.to

To display your blog posts from dev.to on the portfolio:

1. Set your `devUsername` in the `utils/data.js` file to your dev.to username.
2. The application will automatically fetch your latest blog posts and display them in the **BLOG** section.
3. Ensure your blogs are publicly visible on dev.to, and the application will fetch them using the dev.to API.

---

# Packages Used :package:

|   Used Package List    |
| :--------------------: |
|    @emailjs/browser    |
|  @next/third-parties   |
|         axios          |
|      lottie-react      |
|          next          |
|       nodemailer       |
|         react          |
|       react-dom        |
|   react-fast-marquee   |
| react-google-recaptcha |
|      react-icons       |
|     react-toastify     |
|         sharp          |
|          sass          |
|      tailwindcss       |

---

# FAQ:

1. For those facing the issue of "`next` is not recognized as an internal or external command, operable program or batch file."

Run the following command:

```bash

npm install -g next

```

This installs Next.js globally

then do the usual `npm run dev`
