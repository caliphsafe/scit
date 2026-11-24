# SCIT
### Southcoast Computer & IT Training | A 43Dou Learning Project

SCIT is a **video-first interactive refresher** built for a technical support professional preparing for Southcoast Health's **Personal Computer Technician** role at St. Luke's Hospital in New Bedford, MA.

SCIT is **independent**. It is not affiliated with Southcoast Health, and its lessons are **not a formal certification**.

## What is in the course?

Fourteen self-paced days corresponding to the Southcoast job posting:

| Day | Module |
| --- | --- |
| 01 | Hospital IT incident prioritization and technician workflow |
| 02 | Windows 11 diagnostic tools and event logs |
| 03 | Windows failures, drivers and safe recovery |
| 04 | Active Directory users, groups and computers |
| 05 | Account lockouts, Group Policy and domain troubleshooting |
| 06 | TCP/IP, DHCP, DNS and wireless |
| 07 | Practical enterprise connectivity fault isolation |
| 08 | Standard computer imaging and deployment |
| 09 | Microsoft Intune, Entra ID and Autopilot |
| 10 | HP hardware diagnostics and repairs |
| 11 | Printers, peripherals and mobile device support |
| 12 | Healthcare security and HIPAA |
| 13 | Ticket documentation, CompTIA A+ and interview preparation |
| 14 | Final multi-incident hospital-support capstone |

Every module includes:

- A **video-first** lesson with a verified external YouTube video. You can play it within the page or open YouTube directly.
- **Three short reading cards** explaining how the technology is used, plus official docs or trusted references.
- A **three-decision interactive help-desk ticket** with immediate feedback and retryable decisions.
- A **three-item real-world practice checklist** for your own computer or isolated lab, and a saved notes field.
- A **three-question scored quiz**, passing at 2 out of 3.
- A summary of progress with an optional download of your scores and notes.

The course contains **14 videos, 42 branching/graded troubleshooting decisions, and 42 quiz questions**, plus 42 optional practice tasks.

## How progress works

The app stores progress in your **browser's localStorage** under `scit:v1:progress`. No account, backend, or tracking service is required. It is device- and browser-specific and can be erased in the app.

A module counts as finished when:

1. You manually confirm the video was reviewed.
2. You finish the three interactive troubleshooting decisions.
3. You score at least 2/3 on the quiz.

Practice checklists are optional but highly recommended. The readiness report is a personal study tracker, not formal proof of competence.

## Run locally

Open `index.html` in a browser, or use a basic static server:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy

This is a **pure static HTML/CSS/JavaScript** project. No build command, environment variables, API keys, or server database are required.

Connect `caliphsafe/scit` to Vercel as an **Other** framework with the root directory set to the repository root. Pushes to `main` will redeploy automatically after Git integration.

## Project structure

- `index.html` - accessible application shell
- `styles.css` - design system and responsive layout
- `course.js` - training modules, lab scenarios, quiz questions, source URLs
- `app.js` - interactive lesson engine, local progress, scoring and export
- `favicon.svg` - SCIT icon

## Safety and limitations

**Do not** test the instructions against hospital systems, real accounts or production devices. Use your own hardware, read-only commands when appropriate, or an authorized isolated virtual lab. No actual patient records are used. External YouTube creators may limit embedded playback; the direct video link is provided. Videos and documentation can change over time.

**Verified job reference:** [Southcoast Personal Computer Technician](https://southcoasthealthcareers.org/job/2811/personal-computer-technician-information-technology-us-ma-new-bedford-101-page-st/).

**Study sources:** Microsoft Learn, CompTIA, Professor Messer, HP Support, Kevtech IT Support, HHS, and U.S. Health IT resources. All external media remains hosted by its publisher.
