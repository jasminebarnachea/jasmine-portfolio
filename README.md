# Jasmine Barnachea Portfolio

Personal portfolio website for **Jasmine Barnachea**, an Information Technology graduate based in La Union, Philippines. It presents her background, education, selected mobile projects, technical stack, certificates, and contact details.

## Built with

- Next.js 15
- React 19
- TypeScript
- CSS

## Site screens

The portfolio is a single-page website. Use the navigation links to move between these screens/sections:

| Screen | What it shows |
| --- | --- |
| Home / Hero | Jasmine's profile photo, short introduction, graduate status, location, GitHub link, and an email contact dialog. |
| About | A professional summary covering web and mobile development, databases, and networking. |
| Education | BSIT education history at Universidad de Dagupan and Polytechnic College of La Union. |
| Projects | Two mobile-app portfolio cards: **Recipe Finder**, a Filipino recipe discovery app, and **PetSit Connect**, a pet-owner and sitter matching app. Each card includes its app screens and technology tags. |
| Stack | Frontend, backend/data, and networking tools and technologies. |
| Certifications | CCNA Enterprise Networking, CCNA Switching/Routing/Wireless, CCNAv7 Introduction to Networks, and Introduction to Cybersecurity certificates. Select a certificate to view it at full size. |
| Contact | Email, location, languages, and social links for getting in touch. |

### Project app screens

| Project | Screens | Description |
| --- | --- | --- |
| Recipe Finder | [Screen 1](assets/picture/recipe1.jpg) · [Screen 2](assets/picture/recipe2.jpg) | Demonstrates the Filipino recipe finder experience: users can find meal ideas from ingredients or an image, then save recipes. |
| PetSit Connect | [Screen 1](assets/picture/capstone1.jpg) · [Screen 2](assets/picture/casptone2.jpg) | Demonstrates a pet-care service app where owners can find sitters, manage bookings, communicate, and arrange care. |

## Run locally

Prerequisite: Node.js 18.18 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Commit and push to GitHub

This project is connected to:

```text
https://github.com/binibaby/Portfolio.git
```

After making changes, run these commands from the project folder:

```bash
# 1. Check which files changed
git status

# 2. Stage the changes you want to upload
git add .

# 3. Save them in Git with a clear message
git commit -m "Describe your update"

# 4. Upload the commit to GitHub
git push origin main
```

For example, after updating your portfolio:

```bash
git add .
git commit -m "Update portfolio content and styling"
git push origin main
```

If GitHub asks you to sign in, complete the browser prompt or use a GitHub personal access token in place of a password. You can confirm the upload by refreshing the repository page on GitHub.

## Project structure

```text
app/          Next.js pages and global styling
components/   Portfolio sections and shared UI
data/         Portfolio content (projects, stack, certificates)
assets/       Profile, project-screen, and certificate images
```
