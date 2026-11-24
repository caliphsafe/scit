/* SCIT curriculum with sourced videos, readings and fictional support labs. */
window.SCIT_COURSE = [
  {
    "id": "triage",
    "day": 1,
    "title": "Think like a hospital PC technician",
    "category": "Service operations",
    "mins": 45,
    "level": "Re-entry",
    "summary": "Recover your LogMeIn troubleshooting method and apply clinical-impact prioritization.",
    "video": "_tsPN5ZqEBQ",
    "videoTitle": "Troubleshooting real-life help desk tickets",
    "channel": "Kevtech IT Support",
    "reading": [
      [
        "Southcoast job expectations",
        "https://southcoasthealthcareers.org/job/2811/personal-computer-technician-information-technology-us-ma-new-bedford-101-page-st/"
      ],
      [
        "Incident management priorities",
        "https://www.servicenow.com/docs/r/it-service-management/incident-management/incident-management-process.html"
      ]
    ],
    "notes": [
      [
        "Start with impact",
        "Count affected users, identify clinical impact, and determine whether service can be restored through a safe workaround."
      ],
      [
        "Collect evidence",
        "Get the exact error, device name, time, scope, recent changes, and the user's expected behavior before changing anything."
      ],
      [
        "Close the loop",
        "Document troubleshooting, confirm with the user that work is restored, and escalate promptly when your access or expertise ends."
      ]
    ],
    "brief": "At 9:05 AM, three tickets arrive: a finance printer is jammed, a clinician is locked out of a workstation needed for patient care, and an entire unit reports that clinical workstations cannot access a shared application.",
    "steps": [
      [
        "What should you investigate first?",
        "The single finance printer",
        "The unit-wide clinical application outage",
        "The clinician's individual password",
        1,
        "Multiple affected clinical stations suggest a high-impact incident; confirm patient-care urgency and escalate per policy."
      ],
      [
        "What is your first diagnostic question to the unit?",
        "Which users, stations and locations are affected, and when did it start?",
        "Can everyone restart immediately?",
        "Which employee should receive a new laptop?",
        0,
        "Understanding scope and onset quickly separates workstation-level failures from a larger service interruption."
      ],
      [
        "You confirm a unit-wide outage. What next?",
        "Wait until the next morning",
        "Attempt unapproved server changes",
        "Notify the incident lead and relevant application/network teams while providing updates",
        2,
        "Coordinate and communicate. Follow change controls and use approved downtime procedures rather than ad-hoc production changes."
      ]
    ],
    "practice": [
      "On paper, rank five sample tickets by impact and urgency.",
      "Write a 4-sentence ticket: symptom, scope, action and next step.",
      "Explain one incident from your LogMeIn experience using a structured troubleshooting method."
    ],
    "prompt": "Describe your best example of prioritizing a user-facing outage.",
    "quiz": [
      {
        "prompt": "What should determine incident priority?",
        "options": [
          "Who complains loudest",
          "Impact and urgency",
          "The ticket's age only"
        ],
        "correct": 1,
        "why": "Clinical impact and breadth of the outage are key inputs."
      },
      {
        "prompt": "Which is useful before changing settings?",
        "options": [
          "Exact error and time",
          "Guessing at the cause",
          "Disabling security"
        ],
        "correct": 0,
        "why": "Collect evidence first."
      },
      {
        "prompt": "A problem affects an entire unit. What is appropriate?",
        "options": [
          "Work alone without escalation",
          "Follow incident escalation and communication procedures",
          "Reimage all devices immediately"
        ],
        "correct": 1,
        "why": "A coordinated response protects service and patient care."
      }
    ],
    "lab": {
      "brief": "At 9:05 AM, three tickets arrive: a finance printer is jammed, a clinician is locked out of a workstation needed for patient care, and an entire unit reports that clinical workstations cannot access a shared application.",
      "steps": [
        {
          "prompt": "What should you investigate first?",
          "options": [
            "The single finance printer",
            "The unit-wide clinical application outage",
            "The clinician's individual password"
          ],
          "correct": 1,
          "why": "Multiple affected clinical stations suggest a high-impact incident; confirm patient-care urgency and escalate per policy."
        },
        {
          "prompt": "What is your first diagnostic question to the unit?",
          "options": [
            "Which users, stations and locations are affected, and when did it start?",
            "Can everyone restart immediately?",
            "Which employee should receive a new laptop?"
          ],
          "correct": 0,
          "why": "Understanding scope and onset quickly separates workstation-level failures from a larger service interruption."
        },
        {
          "prompt": "You confirm a unit-wide outage. What next?",
          "options": [
            "Wait until the next morning",
            "Attempt unapproved server changes",
            "Notify the incident lead and relevant application/network teams while providing updates"
          ],
          "correct": 2,
          "why": "Coordinate and communicate. Follow change controls and use approved downtime procedures rather than ad-hoc production changes."
        }
      ],
      "practice": [
        "On paper, rank five sample tickets by impact and urgency.",
        "Write a 4-sentence ticket: symptom, scope, action and next step.",
        "Explain one incident from your LogMeIn experience using a structured troubleshooting method."
      ],
      "notePrompt": "Describe your best example of prioritizing a user-facing outage."
    }
  },
  {
    "id": "win-tools",
    "day": 2,
    "title": "Windows 11: the diagnostic toolbox",
    "category": "Windows",
    "mins": 60,
    "level": "Refresh",
    "summary": "Get fast with Task Manager, Device Manager, Event Viewer, services and the Reliability Monitor.",
    "video": "e0KInDq-6Pw",
    "videoTitle": "The Microsoft Management Console, A+ 220-1202",
    "channel": "Professor Messer",
    "reading": [
      [
        "Windows troubleshooting tools",
        "https://www.professormesser.com/free-a-plus-training/220-1202/220-1202-video/the-microsoft-management-console-220-1202/"
      ]
    ],
    "notes": [
      [
        "Observe before acting",
        "Task Manager reveals resource pressure; Reliability Monitor shows crashes over time; Event Viewer records detailed system and application events."
      ],
      [
        "Choose the right tool",
        "Use Device Manager for driver/device status; Services for service state; Disk Management for storage layout, but do not alter partitions casually."
      ],
      [
        "Evidence-based diagnosis",
        "Filter event logs by timestamp and source. A warning's presence alone does not prove it caused the user's symptom."
      ]
    ],
    "brief": "A PC runs slowly only after users launch a scheduling app. Task Manager shows disk utilization near 100%, and Event Viewer has multiple disk warnings near the complaint time.",
    "steps": [
      [
        "What should you inspect first?",
        "Task Manager's processes and disk activity",
        "Uninstall all applications",
        "Erase the disk",
        0,
        "Correlate high disk activity to a process or service before making changes."
      ],
      [
        "Which next tool helps correlate hardware warnings by time?",
        "Paint",
        "Event Viewer",
        "Calculator",
        1,
        "Use Event Viewer and Reliability Monitor to correlate symptoms with system events."
      ],
      [
        "What is the best immediate response?",
        "Capture the evidence, check storage health, and plan an approved fix",
        "Disable antivirus across all computers",
        "Delete unknown system files",
        0,
        "Preserve evidence and use supported diagnostics before disruptive actions."
      ]
    ],
    "practice": [
      "On your own Windows PC, open Task Manager and note CPU, memory and disk usage.",
      "Open Event Viewer and locate the System log without deleting any entries.",
      "Open Device Manager and identify the network and storage device categories."
    ],
    "prompt": "Which utility revealed the most useful information and why?",
    "quiz": [
      {
        "prompt": "Which tool shows live CPU and disk usage?",
        "options": [
          "Task Manager",
          "Notepad",
          "Disk Cleanup"
        ],
        "correct": 0,
        "why": "Task Manager monitors running process resource use."
      },
      {
        "prompt": "Where are system event logs examined?",
        "options": [
          "Event Viewer",
          "Clipboard",
          "Settings > Personalization"
        ],
        "correct": 0,
        "why": "Event Viewer contains system and application event logs."
      },
      {
        "prompt": "What is a safe first step before modifying a disk?",
        "options": [
          "Record state and confirm backups/authorization",
          "Delete partitions",
          "Disable protections"
        ],
        "correct": 0,
        "why": "Avoid destructive remediation without validation."
      }
    ],
    "lab": {
      "brief": "A PC runs slowly only after users launch a scheduling app. Task Manager shows disk utilization near 100%, and Event Viewer has multiple disk warnings near the complaint time.",
      "steps": [
        {
          "prompt": "What should you inspect first?",
          "options": [
            "Task Manager's processes and disk activity",
            "Uninstall all applications",
            "Erase the disk"
          ],
          "correct": 0,
          "why": "Correlate high disk activity to a process or service before making changes."
        },
        {
          "prompt": "Which next tool helps correlate hardware warnings by time?",
          "options": [
            "Paint",
            "Event Viewer",
            "Calculator"
          ],
          "correct": 1,
          "why": "Use Event Viewer and Reliability Monitor to correlate symptoms with system events."
        },
        {
          "prompt": "What is the best immediate response?",
          "options": [
            "Capture the evidence, check storage health, and plan an approved fix",
            "Disable antivirus across all computers",
            "Delete unknown system files"
          ],
          "correct": 0,
          "why": "Preserve evidence and use supported diagnostics before disruptive actions."
        }
      ],
      "practice": [
        "On your own Windows PC, open Task Manager and note CPU, memory and disk usage.",
        "Open Event Viewer and locate the System log without deleting any entries.",
        "Open Device Manager and identify the network and storage device categories."
      ],
      "notePrompt": "Which utility revealed the most useful information and why?"
    }
  },
  {
    "id": "win-repair",
    "day": 3,
    "title": "Windows failures and safe recovery",
    "category": "Windows",
    "mins": 65,
    "level": "Refresh",
    "summary": "Diagnose drivers, corrupted system files, boot issues and failed updates without risking production data.",
    "video": "kLIUVFTTdcA",
    "videoTitle": "Additional Windows Tools, A+ 220-1202",
    "channel": "Professor Messer",
    "reading": [
      [
        "Troubleshooting Windows",
        "https://www.professormesser.com/free-a-plus-training/220-1202/220-1202-video/troubleshooting-windows-220-1202/"
      ]
    ],
    "notes": [
      [
        "Use a differential",
        "Did the problem start after an update, driver change or device replacement? Contrast software symptoms against hardware symptoms."
      ],
      [
        "Know recovery tools",
        "Safe Mode, Windows Recovery Environment, Device Manager rollback, System File Checker and DISM serve different purposes."
      ],
      [
        "Avoid risky shortcuts",
        "On an employer's device, follow backup, encryption key, privilege and downtime procedures before repairs."
      ]
    ],
    "brief": "A workstation began crashing after a graphics driver update. The user reports that it previously worked well, and the device now has repeated display failures.",
    "steps": [
      [
        "Best initial hypothesis?",
        "Screen resolution magically changed",
        "The recent graphics driver update may be involved",
        "Every application is infected",
        1,
        "The timing points to the recently updated driver, but confirm with evidence."
      ],
      [
        "Which tool would you inspect?",
        "Device Manager driver properties and Event Viewer",
        "A random web download",
        "Disk formatting utility",
        0,
        "Driver history and error events guide next steps."
      ],
      [
        "After confirming the driver caused crashes, what should you propose?",
        "Use an approved driver rollback or supported package and test",
        "Replace all hospital computers",
        "Delete the user profile immediately",
        0,
        "Target the fault with the least disruptive authorized fix."
      ]
    ],
    "practice": [
      "Locate Windows Update history and Device Manager on your own PC.",
      "Run the read-only command systeminfo in a local terminal and note OS build.",
      "Explain when you would use SFC versus DISM, without running repairs on a managed device."
    ],
    "prompt": "Write a rollback and verification plan in three steps.",
    "quiz": [
      {
        "prompt": "What does sfc /scannow inspect?",
        "options": [
          "Protected system files",
          "Network port speed",
          "Printer ink"
        ],
        "correct": 0,
        "why": "SFC checks protected Windows system files."
      },
      {
        "prompt": "A newly installed driver causes problems. A sensible option is?",
        "options": [
          "Review driver rollback options",
          "Delete all user accounts",
          "Reboot network servers"
        ],
        "correct": 0,
        "why": "A supported rollback may restore the earlier working state."
      },
      {
        "prompt": "What comes before a potentially disruptive repair?",
        "options": [
          "Backup/authorization and impact review",
          "Guess and act",
          "Disabling logs"
        ],
        "correct": 0,
        "why": "Protect data and comply with the change process."
      }
    ],
    "lab": {
      "brief": "A workstation began crashing after a graphics driver update. The user reports that it previously worked well, and the device now has repeated display failures.",
      "steps": [
        {
          "prompt": "Best initial hypothesis?",
          "options": [
            "Screen resolution magically changed",
            "The recent graphics driver update may be involved",
            "Every application is infected"
          ],
          "correct": 1,
          "why": "The timing points to the recently updated driver, but confirm with evidence."
        },
        {
          "prompt": "Which tool would you inspect?",
          "options": [
            "Device Manager driver properties and Event Viewer",
            "A random web download",
            "Disk formatting utility"
          ],
          "correct": 0,
          "why": "Driver history and error events guide next steps."
        },
        {
          "prompt": "After confirming the driver caused crashes, what should you propose?",
          "options": [
            "Use an approved driver rollback or supported package and test",
            "Replace all hospital computers",
            "Delete the user profile immediately"
          ],
          "correct": 0,
          "why": "Target the fault with the least disruptive authorized fix."
        }
      ],
      "practice": [
        "Locate Windows Update history and Device Manager on your own PC.",
        "Run the read-only command systeminfo in a local terminal and note OS build.",
        "Explain when you would use SFC versus DISM, without running repairs on a managed device."
      ],
      "notePrompt": "Write a rollback and verification plan in three steps."
    }
  },
  {
    "id": "ad-basics",
    "day": 4,
    "title": "Active Directory: users, computers, groups",
    "category": "Identity",
    "mins": 70,
    "level": "Priority",
    "summary": "Refresh the enterprise account structures you worked with at Experian.",
    "video": "h7XwFtM938I",
    "videoTitle": "Active Directory help desk lab series",
    "channel": "Kevtech IT Support",
    "reading": [
      [
        "Microsoft: manage user accounts",
        "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage-user-accounts-in-windows-server"
      ],
      [
        "AD DS overview",
        "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services"
      ]
    ],
    "notes": [
      [
        "Identity structure",
        "A domain controller holds directory services; Organizational Units help organize objects; security groups assign permissions."
      ],
      [
        "Authentication first",
        "Check scope, exact error, domain reachability, account state and policy before resetting credentials."
      ],
      [
        "Least privilege",
        "Verify identity and authorization before unlocking, resetting or changing access. Use a test lab for admin practice."
      ]
    ],
    "brief": "An employee cannot sign in to a domain-joined workstation. Their account works on a second device, and other people can sign in to the original workstation.",
    "steps": [
      [
        "What does this evidence suggest?",
        "A workstation-specific or cached-login issue",
        "A hospital-wide domain outage",
        "The user has no account",
        0,
        "The same account works elsewhere, narrowing the possible causes."
      ],
      [
        "What is an appropriate investigation?",
        "Check the workstation's network/domain connectivity and error",
        "Delete all directory users",
        "Change domain controller settings",
        0,
        "Check connectivity, timestamps and authentication evidence."
      ],
      [
        "The issue needs permissions you lack. Next?",
        "Request authorized escalation with findings",
        "Ask the user to share their password",
        "Turn off authentication",
        0,
        "Escalate with evidence; never collect passwords."
      ]
    ],
    "practice": [
      "Sketch a sample domain with two OUs, three users and two security groups.",
      "Review AD Users and Computers in an isolated lab or tutorial video.",
      "Explain security groups versus OUs to a nontechnical colleague."
    ],
    "prompt": "Explain how you would verify an employee's identity before resetting their account.",
    "quiz": [
      {
        "prompt": "What is a domain controller?",
        "options": [
          "A machine providing domain directory services",
          "A printing cable",
          "A local browser tab"
        ],
        "correct": 0,
        "why": "Domain controllers support directory and authentication."
      },
      {
        "prompt": "What commonly assigns access?",
        "options": [
          "Security groups",
          "Wallpaper",
          "Keyboard layout"
        ],
        "correct": 0,
        "why": "Group membership is a common permission mechanism."
      },
      {
        "prompt": "Where should you practice creating users?",
        "options": [
          "An isolated, authorized test domain",
          "A hospital production directory",
          "A stranger's system"
        ],
        "correct": 0,
        "why": "Training must not affect live systems."
      }
    ],
    "lab": {
      "brief": "An employee cannot sign in to a domain-joined workstation. Their account works on a second device, and other people can sign in to the original workstation.",
      "steps": [
        {
          "prompt": "What does this evidence suggest?",
          "options": [
            "A workstation-specific or cached-login issue",
            "A hospital-wide domain outage",
            "The user has no account"
          ],
          "correct": 0,
          "why": "The same account works elsewhere, narrowing the possible causes."
        },
        {
          "prompt": "What is an appropriate investigation?",
          "options": [
            "Check the workstation's network/domain connectivity and error",
            "Delete all directory users",
            "Change domain controller settings"
          ],
          "correct": 0,
          "why": "Check connectivity, timestamps and authentication evidence."
        },
        {
          "prompt": "The issue needs permissions you lack. Next?",
          "options": [
            "Request authorized escalation with findings",
            "Ask the user to share their password",
            "Turn off authentication"
          ],
          "correct": 0,
          "why": "Escalate with evidence; never collect passwords."
        }
      ],
      "practice": [
        "Sketch a sample domain with two OUs, three users and two security groups.",
        "Review AD Users and Computers in an isolated lab or tutorial video.",
        "Explain security groups versus OUs to a nontechnical colleague."
      ],
      "notePrompt": "Explain how you would verify an employee's identity before resetting their account."
    }
  },
  {
    "id": "ad-issues",
    "day": 5,
    "title": "Account lockouts, Group Policy and domain issues",
    "category": "Identity",
    "mins": 65,
    "level": "Priority",
    "summary": "Work through practical account lockout and GPO troubleshooting decisions.",
    "video": "EA0ZnH4Rhm0",
    "videoTitle": "Common Active Directory issues, commands and offline PCs",
    "channel": "Kevtech IT Support",
    "reading": [
      [
        "AD account management",
        "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage-user-accounts-in-windows-server"
      ],
      [
        "Group Policy overview",
        "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview"
      ],
      [
        "Account unlock demo (YouTube)",
        "https://www.youtube.com/watch?v=UnWi79OfTS4"
      ]
    ],
    "notes": [
      [
        "Account lockouts",
        "An account can relock because of an old credential stored on a service, mobile device or mapped resource."
      ],
      [
        "Group Policy",
        "Group Policy Objects apply settings to scoped users and computers; diagnostic tools include gpresult and Event Viewer."
      ],
      [
        "Domain services and DNS",
        "Domain joins and authentication often depend on correct internal DNS resolution. Changing the DNS to a public server can break AD discovery."
      ]
    ],
    "brief": "A staff member's account unlocks successfully but locks again within minutes. Another signed-in device still has an outdated password.",
    "steps": [
      [
        "What is the likely pattern?",
        "Repeated authentication attempts from a device holding old credentials",
        "A failed monitor",
        "No IP address exists anywhere",
        0,
        "Stale credentials can repeatedly relock an account."
      ],
      [
        "What is the next best action?",
        "Identify the source of failed sign-ins through approved logs and review saved credentials",
        "Disable all domain controllers",
        "Keep unlocking without investigating",
        0,
        "Find the source rather than resetting repeatedly."
      ],
      [
        "How do you finish?",
        "Verify successful login across devices, document and advise on password updates",
        "Share the password by email",
        "Remove all lockout policies",
        0,
        "Verify sustained resolution and keep controls intact."
      ]
    ],
    "practice": [
      "In a practice VM or guided video, identify an OU and group membership.",
      "On your own Windows PC, learn what gpresult /r displays; do not change domain settings.",
      "Write an account lockout escalation note including source device and timestamp."
    ],
    "prompt": "Describe how you would distinguish a locked account from a DNS or network failure.",
    "quiz": [
      {
        "prompt": "Repeated lockouts can come from?",
        "options": [
          "Stored old credentials",
          "Monitor brightness",
          "Keyboard backlight"
        ],
        "correct": 0,
        "why": "Background authentication may reuse old credentials."
      },
      {
        "prompt": "What does gpresult help show?",
        "options": [
          "Applied Group Policy",
          "BIOS temperature",
          "Laptop battery cycles"
        ],
        "correct": 0,
        "why": "It reports resultant Group Policy information."
      },
      {
        "prompt": "On a domain PC, DNS should usually point to?",
        "options": [
          "Configured internal domain-aware DNS",
          "Any random public DNS",
          "A social media URL"
        ],
        "correct": 0,
        "why": "AD discovery relies on appropriate DNS configuration."
      }
    ],
    "lab": {
      "brief": "A staff member's account unlocks successfully but locks again within minutes. Another signed-in device still has an outdated password.",
      "steps": [
        {
          "prompt": "What is the likely pattern?",
          "options": [
            "Repeated authentication attempts from a device holding old credentials",
            "A failed monitor",
            "No IP address exists anywhere"
          ],
          "correct": 0,
          "why": "Stale credentials can repeatedly relock an account."
        },
        {
          "prompt": "What is the next best action?",
          "options": [
            "Identify the source of failed sign-ins through approved logs and review saved credentials",
            "Disable all domain controllers",
            "Keep unlocking without investigating"
          ],
          "correct": 0,
          "why": "Find the source rather than resetting repeatedly."
        },
        {
          "prompt": "How do you finish?",
          "options": [
            "Verify successful login across devices, document and advise on password updates",
            "Share the password by email",
            "Remove all lockout policies"
          ],
          "correct": 0,
          "why": "Verify sustained resolution and keep controls intact."
        }
      ],
      "practice": [
        "In a practice VM or guided video, identify an OU and group membership.",
        "On your own Windows PC, learn what gpresult /r displays; do not change domain settings.",
        "Write an account lockout escalation note including source device and timestamp."
      ],
      "notePrompt": "Describe how you would distinguish a locked account from a DNS or network failure."
    }
  },
  {
    "id": "network-core",
    "day": 6,
    "title": "TCP/IP, DHCP, DNS and wireless",
    "category": "Networking",
    "mins": 70,
    "level": "Priority",
    "summary": "Rebuild enterprise networking confidence without repeating beginner-only material.",
    "video": "VBDS_kOHhVk",
    "videoTitle": "Troubleshooting Networks, A+ 220-1201",
    "channel": "Professor Messer",
    "reading": [
      [
        "Microsoft DNS overview",
        "https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-overview"
      ],
      [
        "Network troubleshooting lesson",
        "https://www.professormesser.com/network-plus/n10-006/troubleshooting-dns-and-dhcp/"
      ]
    ],
    "notes": [
      [
        "Connectivity chain",
        "Physical link, IP configuration, gateway, DNS resolution, authentication and application reachability are distinct checkpoints."
      ],
      [
        "Know your commands",
        "ipconfig /all reveals DHCP, gateway and DNS values. nslookup tests resolution; ping and tracert can help where ICMP is allowed."
      ],
      [
        "APIPA clue",
        "A 169.254.x.x address often means the interface did not obtain a usable DHCP lease; first verify the connection and DHCP path."
      ]
    ],
    "brief": "A workstation has 169.254.32.14 and cannot reach network resources. An adjacent workstation receives 10.20.14.58 and works normally.",
    "steps": [
      [
        "What does 169.254.x.x indicate?",
        "An automatic private address, often from DHCP failure",
        "Correct hospital domain DNS",
        "A strong wireless signal",
        0,
        "APIPA often appears after the device cannot obtain a DHCP lease."
      ],
      [
        "What is the best first check?",
        "Inspect the cable or Wi-Fi connection and compare DHCP settings",
        "Change hospital routers immediately",
        "Reimage the entire floor",
        0,
        "Start with local link and configuration checks."
      ],
      [
        "What would strengthen the diagnosis?",
        "Inspect ipconfig /all and test access to the approved DHCP path",
        "Erase browsing history",
        "Install a new music player",
        0,
        "Read the interface status and DHCP configuration before remediation."
      ]
    ],
    "practice": [
      "On your device, record output for ipconfig /all or the macOS network equivalent.",
      "Use nslookup on a public hostname and describe the result.",
      "Draw the path from laptop to access point/switch, gateway, DNS and application."
    ],
    "prompt": "What troubleshooting clue most clearly distinguishes DHCP from DNS trouble?",
    "quiz": [
      {
        "prompt": "What assigns most client IP addresses automatically?",
        "options": [
          "DHCP",
          "DNS",
          "NTFS"
        ],
        "correct": 0,
        "why": "DHCP provides leases and related settings."
      },
      {
        "prompt": "What maps hostnames to addresses?",
        "options": [
          "DNS",
          "RAM",
          "BIOS"
        ],
        "correct": 0,
        "why": "DNS handles name resolution."
      },
      {
        "prompt": "Which Windows command shows full adapter configuration?",
        "options": [
          "ipconfig /all",
          "format c:",
          "shutdown /s"
        ],
        "correct": 0,
        "why": "ipconfig /all prints adapter parameters."
      }
    ],
    "lab": {
      "brief": "A workstation has 169.254.32.14 and cannot reach network resources. An adjacent workstation receives 10.20.14.58 and works normally.",
      "steps": [
        {
          "prompt": "What does 169.254.x.x indicate?",
          "options": [
            "An automatic private address, often from DHCP failure",
            "Correct hospital domain DNS",
            "A strong wireless signal"
          ],
          "correct": 0,
          "why": "APIPA often appears after the device cannot obtain a DHCP lease."
        },
        {
          "prompt": "What is the best first check?",
          "options": [
            "Inspect the cable or Wi-Fi connection and compare DHCP settings",
            "Change hospital routers immediately",
            "Reimage the entire floor"
          ],
          "correct": 0,
          "why": "Start with local link and configuration checks."
        },
        {
          "prompt": "What would strengthen the diagnosis?",
          "options": [
            "Inspect ipconfig /all and test access to the approved DHCP path",
            "Erase browsing history",
            "Install a new music player"
          ],
          "correct": 0,
          "why": "Read the interface status and DHCP configuration before remediation."
        }
      ],
      "practice": [
        "On your device, record output for ipconfig /all or the macOS network equivalent.",
        "Use nslookup on a public hostname and describe the result.",
        "Draw the path from laptop to access point/switch, gateway, DNS and application."
      ],
      "notePrompt": "What troubleshooting clue most clearly distinguishes DHCP from DNS trouble?"
    }
  },
  {
    "id": "network-live",
    "day": 7,
    "title": "Isolate a real connectivity outage",
    "category": "Networking",
    "mins": 70,
    "level": "Priority",
    "summary": "Use test results to separate DNS, gateway, Wi-Fi, server and application problems.",
    "video": "VBDS_kOHhVk",
    "videoTitle": "Troubleshooting Networks, A+ 220-1201",
    "channel": "Professor Messer",
    "reading": [
      [
        "Microsoft: troubleshoot DNS clients",
        "https://learn.microsoft.com/en-us/windows-server/networking/dns/troubleshoot/troubleshoot-dns-client"
      ]
    ],
    "notes": [
      [
        "Compare known-good peers",
        "Check whether other users on the same network reach the target; this separates local from shared failure."
      ],
      [
        "Name versus address",
        "If a service responds by IP but not by hostname, investigate DNS. A successful ping does not prove the application port is open."
      ],
      [
        "Escalate with specificity",
        "Provide impact, timestamp, IP/DNS settings, successful and failed tests, and whether the issue is reproducible."
      ]
    ],
    "brief": "An approved test server at 10.40.8.20 is reachable by IP, but workstation users cannot open intranet.training.local by hostname. Users in one unit are affected.",
    "steps": [
      [
        "What is your leading hypothesis?",
        "DNS resolution problem",
        "Faulty keyboard",
        "Full local disk",
        0,
        "Address reachability but failed hostname access points to name resolution."
      ],
      [
        "Which diagnostic is most informative?",
        "nslookup intranet.training.local",
        "Disk Cleanup",
        "Printer test page",
        0,
        "nslookup checks where the hostname lookup resolves and which DNS server responds."
      ],
      [
        "The workstation is using a wrong DNS resolver. What next?",
        "Follow approved network settings procedure and verify resolution",
        "Change all network switches",
        "Ignore it because IP ping works",
        0,
        "Correct the authorized configuration, verify names and application connectivity, then document."
      ]
    ],
    "practice": [
      "Run nslookup against a public name on your own device.",
      "Write a 6-step isolation flow for a slow internal web app.",
      "Create a troubleshooting ticket with test results, scope and escalation owner."
    ],
    "prompt": "Write what you would tell a clinician while the network team investigates.",
    "quiz": [
      {
        "prompt": "IP succeeds, hostname fails. Likely area?",
        "options": [
          "DNS",
          "Memory",
          "Display"
        ],
        "correct": 0,
        "why": "This often indicates name resolution trouble."
      },
      {
        "prompt": "Does ping success prove a web app is healthy?",
        "options": [
          "No",
          "Always",
          "Only on weekends"
        ],
        "correct": 0,
        "why": "ICMP reachability is different from application protocol health."
      },
      {
        "prompt": "Which is useful in escalation?",
        "options": [
          "IP, DNS, timestamp, scope, tests",
          "Only the words 'not working'",
          "Personal passwords"
        ],
        "correct": 0,
        "why": "Objective diagnostics speed resolution."
      }
    ],
    "lab": {
      "brief": "An approved test server at 10.40.8.20 is reachable by IP, but workstation users cannot open intranet.training.local by hostname. Users in one unit are affected.",
      "steps": [
        {
          "prompt": "What is your leading hypothesis?",
          "options": [
            "DNS resolution problem",
            "Faulty keyboard",
            "Full local disk"
          ],
          "correct": 0,
          "why": "Address reachability but failed hostname access points to name resolution."
        },
        {
          "prompt": "Which diagnostic is most informative?",
          "options": [
            "nslookup intranet.training.local",
            "Disk Cleanup",
            "Printer test page"
          ],
          "correct": 0,
          "why": "nslookup checks where the hostname lookup resolves and which DNS server responds."
        },
        {
          "prompt": "The workstation is using a wrong DNS resolver. What next?",
          "options": [
            "Follow approved network settings procedure and verify resolution",
            "Change all network switches",
            "Ignore it because IP ping works"
          ],
          "correct": 0,
          "why": "Correct the authorized configuration, verify names and application connectivity, then document."
        }
      ],
      "practice": [
        "Run nslookup against a public name on your own device.",
        "Write a 6-step isolation flow for a slow internal web app.",
        "Create a troubleshooting ticket with test results, scope and escalation owner."
      ],
      "notePrompt": "Write what you would tell a clinician while the network team investigates."
    }
  },
  {
    "id": "image",
    "day": 8,
    "title": "Computer imaging and deployment",
    "category": "Deployment",
    "mins": 65,
    "level": "Priority",
    "summary": "Understand imaging, standardized builds, post-deployment checks and secure handoff.",
    "video": "T2WyCkbQkc8",
    "videoTitle": "Windows Autopilot enterprise hands-on lab",
    "channel": "Labs Hands On",
    "reading": [
      [
        "Windows deployment with Autopilot",
        "https://learn.microsoft.com/en-us/training/modules/deploy-microsoft-deployment-toolkit/"
      ],
      [
        "Microsoft deployment concepts",
        "https://learn.microsoft.com/en-us/windows/deployment/"
      ]
    ],
    "notes": [
      [
        "Traditional imaging",
        "A standard operating system image or deployment task sequence can install the OS, drivers and applications consistently."
      ],
      [
        "Autopilot differs",
        "Windows Autopilot mainly provisions and configures eligible devices through cloud management rather than cloning a disk image."
      ],
      [
        "Deployment acceptance",
        "Confirm user sign-in, network access, required apps, security controls, asset inventory and peripherals before handoff."
      ]
    ],
    "brief": "The IT team receives 20 new workstations. A unit needs six ready tomorrow. Users need approved apps, accounts, printers and secure settings.",
    "steps": [
      [
        "What should happen before deployment?",
        "Confirm the standard build, user needs and approved deployment method",
        "Hand out sealed boxes without preparation",
        "Skip security because this is urgent",
        0,
        "Define requirements and prepare a repeatable standard build."
      ],
      [
        "What distinguishes imaging from Autopilot?",
        "Imaging lays down an OS build; Autopilot provisions a supported Windows installation",
        "They are the same cloning process",
        "Autopilot is a BIOS driver",
        0,
        "The technologies can coexist but are not identical."
      ],
      [
        "Which handoff is complete?",
        "Validated login, apps, network, peripherals, policy and documentation",
        "Power light alone",
        "A machine that boots but no apps",
        0,
        "A deployment is complete only when users can work."
      ]
    ],
    "practice": [
      "Draw an imaging/deployment flow from device intake to user acceptance.",
      "Create a workstation setup checklist including network, user, apps and peripherals.",
      "Compare the concepts of Configuration Manager imaging and Autopilot provisioning."
    ],
    "prompt": "Draft a final workstation acceptance checklist for a nurse station.",
    "quiz": [
      {
        "prompt": "What is the purpose of a standard image?",
        "options": [
          "Consistent OS/apps/configuration",
          "Unique wallpaper only",
          "Hardware replacement"
        ],
        "correct": 0,
        "why": "Standardized deployments reduce drift."
      },
      {
        "prompt": "Autopilot primarily supports?",
        "options": [
          "Automated provisioning and enrollment",
          "SSD sector cloning only",
          "Router firmware"
        ],
        "correct": 0,
        "why": "Autopilot provisions Windows devices using management policies."
      },
      {
        "prompt": "What is a useful final acceptance test?",
        "options": [
          "User sign-in plus app and network verification",
          "Only counting boxes",
          "Deleting inventory records"
        ],
        "correct": 0,
        "why": "Validate actual usability before handoff."
      }
    ],
    "lab": {
      "brief": "The IT team receives 20 new workstations. A unit needs six ready tomorrow. Users need approved apps, accounts, printers and secure settings.",
      "steps": [
        {
          "prompt": "What should happen before deployment?",
          "options": [
            "Confirm the standard build, user needs and approved deployment method",
            "Hand out sealed boxes without preparation",
            "Skip security because this is urgent"
          ],
          "correct": 0,
          "why": "Define requirements and prepare a repeatable standard build."
        },
        {
          "prompt": "What distinguishes imaging from Autopilot?",
          "options": [
            "Imaging lays down an OS build; Autopilot provisions a supported Windows installation",
            "They are the same cloning process",
            "Autopilot is a BIOS driver"
          ],
          "correct": 0,
          "why": "The technologies can coexist but are not identical."
        },
        {
          "prompt": "Which handoff is complete?",
          "options": [
            "Validated login, apps, network, peripherals, policy and documentation",
            "Power light alone",
            "A machine that boots but no apps"
          ],
          "correct": 0,
          "why": "A deployment is complete only when users can work."
        }
      ],
      "practice": [
        "Draw an imaging/deployment flow from device intake to user acceptance.",
        "Create a workstation setup checklist including network, user, apps and peripherals.",
        "Compare the concepts of Configuration Manager imaging and Autopilot provisioning."
      ],
      "notePrompt": "Draft a final workstation acceptance checklist for a nurse station."
    }
  },
  {
    "id": "intune",
    "day": 9,
    "title": "Intune, Entra ID and Autopilot",
    "category": "Deployment",
    "mins": 75,
    "level": "Modern tools",
    "summary": "Learn the current cloud-managed endpoint workflow and where it meets classic Active Directory.",
    "video": "FVqeSCmbIRs",
    "videoTitle": "Windows Autopilot with Intune: full 2026 deployment guide",
    "channel": "IT Network Hub",
    "reading": [
      [
        "Microsoft Intune cloud endpoints tutorial",
        "https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/guided-scenarios-overview"
      ],
      [
        "Microsoft Autopilot module",
        "https://learn.microsoft.com/en-us/training/modules/deploy-microsoft-deployment-toolkit/"
      ]
    ],
    "notes": [
      [
        "Identity relationship",
        "On-prem Active Directory and Microsoft Entra ID are different identity systems, with hybrid environments possible."
      ],
      [
        "Intune's role",
        "Intune can apply endpoint configuration, app deployments, compliance and update policies to enrolled devices."
      ],
      [
        "Provisioning steps",
        "Register eligible devices, assign profiles, enroll, apply policies and apps, then validate compliance and sign-in. Administrative practice requires a test tenant."
      ]
    ],
    "brief": "A newly delivered laptop signs in successfully with a work account, but a required application never appears and the device is marked noncompliant.",
    "steps": [
      [
        "Which platform should you inspect?",
        "Intune enrollment, app assignment and compliance status",
        "A random third-party image editor",
        "The facility parking system",
        0,
        "Intune manages enrolled endpoint assignments and compliance reporting."
      ],
      [
        "What might prevent an app from installing?",
        "Assignment, licensing, detection rule or enrollment problem",
        "Incorrect mouse-pad color",
        "User's monitor height",
        0,
        "Validate app policy and device status before reimaging."
      ],
      [
        "Best response when you lack tenant access?",
        "Record enrollment identifiers and errors, then escalate to endpoint management",
        "Ask for the user's MFA code",
        "Disable compliance permanently",
        0,
        "Escalate with evidence and maintain security boundaries."
      ]
    ],
    "practice": [
      "Sketch the flow: Entra join, Intune enrollment, policy and app installation.",
      "Watch the lab and list three failure points that could block Autopilot.",
      "In a nonproduction environment only, explore enrollment reports if access is available."
    ],
    "prompt": "Explain Autopilot to a hiring manager in 3 plain-English sentences.",
    "quiz": [
      {
        "prompt": "What is Intune?",
        "options": [
          "A device/app management platform",
          "A printer cable",
          "A BIOS firmware vendor"
        ],
        "correct": 0,
        "why": "Intune manages enrolled devices and application/policy assignments."
      },
      {
        "prompt": "Entra ID primarily provides?",
        "options": [
          "Cloud identity and access",
          "Hard drive power",
          "HDMI output"
        ],
        "correct": 0,
        "why": "Entra ID supports cloud identity."
      },
      {
        "prompt": "For a device marked noncompliant, a technician should?",
        "options": [
          "Inspect policy status and coordinate supported remediation",
          "Ignore the status",
          "Share admin credentials"
        ],
        "correct": 0,
        "why": "Compliance is investigated through approved tools."
      }
    ],
    "lab": {
      "brief": "A newly delivered laptop signs in successfully with a work account, but a required application never appears and the device is marked noncompliant.",
      "steps": [
        {
          "prompt": "Which platform should you inspect?",
          "options": [
            "Intune enrollment, app assignment and compliance status",
            "A random third-party image editor",
            "The facility parking system"
          ],
          "correct": 0,
          "why": "Intune manages enrolled endpoint assignments and compliance reporting."
        },
        {
          "prompt": "What might prevent an app from installing?",
          "options": [
            "Assignment, licensing, detection rule or enrollment problem",
            "Incorrect mouse-pad color",
            "User's monitor height"
          ],
          "correct": 0,
          "why": "Validate app policy and device status before reimaging."
        },
        {
          "prompt": "Best response when you lack tenant access?",
          "options": [
            "Record enrollment identifiers and errors, then escalate to endpoint management",
            "Ask for the user's MFA code",
            "Disable compliance permanently"
          ],
          "correct": 0,
          "why": "Escalate with evidence and maintain security boundaries."
        }
      ],
      "practice": [
        "Sketch the flow: Entra join, Intune enrollment, policy and app installation.",
        "Watch the lab and list three failure points that could block Autopilot.",
        "In a nonproduction environment only, explore enrollment reports if access is available."
      ],
      "notePrompt": "Explain Autopilot to a hiring manager in 3 plain-English sentences."
    }
  },
  {
    "id": "hp-hardware",
    "day": 10,
    "title": "HP diagnostics and hardware repair",
    "category": "Hardware",
    "mins": 65,
    "level": "Priority",
    "summary": "Diagnose no-boot, overheating, storage and memory failures with OEM-approved tools.",
    "video": "ZudqDSFFAJM",
    "videoTitle": "HP PC Hardware Diagnostics for commercial PCs",
    "channel": "HP Support",
    "reading": [
      [
        "HP hardware diagnostic instructions",
        "https://support.hp.com/us-en/document/ish_2854458-2733239-16"
      ],
      [
        "A+ troubleshooting hardware",
        "https://www.professormesser.com/free-a-plus-training/220-1201/220-1201-video/troubleshooting-hardware-220-1201/"
      ]
    ],
    "notes": [
      [
        "Separate hardware from software",
        "A power-on self-test failure, OEM diagnostic failure ID or persistent storage error can point to failing components."
      ],
      [
        "HP tools",
        "HP PC Hardware Diagnostics can test memory, storage and more; exact UEFI shortcuts and service options vary by model."
      ],
      [
        "Service workflow",
        "Check authorization, warranty, safe power isolation, asset logging and data protection before opening a managed PC. HP Self Maintainer training is a post-hire requirement in the posting."
      ]
    ],
    "brief": "A desktop displays intermittent boot failures. The approved HP diagnostics utility reports a failed storage test with an error ID.",
    "steps": [
      [
        "What is the strongest evidence?",
        "OEM storage diagnostic failure",
        "Desktop wallpaper",
        "User's email signature",
        0,
        "A failed OEM test provides stronger evidence than guessing."
      ],
      [
        "What action should come before replacing the drive?",
        "Follow backup/data handling, encryption and device servicing procedures",
        "Copy patient files to a personal drive",
        "Delete the device record",
        0,
        "Protect data and follow authorized service process."
      ],
      [
        "What should the ticket record?",
        "Model/serial, diagnostic ID, work performed and validation",
        "Only the word 'fixed'",
        "Employee passwords",
        0,
        "Detailed asset and diagnostic records support repair and warranty workflows."
      ]
    ],
    "practice": [
      "Identify RAM, SSD, power supply, fans and motherboard in a spare device or exploded-view diagram.",
      "Review HP's diagnostic tool menus in the video.",
      "Write a safe SSD replacement workflow without performing it on a managed computer."
    ],
    "prompt": "What safety and data checks would you perform before hardware replacement?",
    "quiz": [
      {
        "prompt": "What does an OEM diagnostic failure ID help with?",
        "options": [
          "Identifying component test failures",
          "Changing user permissions",
          "Configuring DNS"
        ],
        "correct": 0,
        "why": "It documents a test result for servicing."
      },
      {
        "prompt": "A PC powers on but no display appears. First approach?",
        "options": [
          "Check display path and POST symptoms",
          "Reinstall every application",
          "Reset all domain passwords"
        ],
        "correct": 0,
        "why": "Distinguish a display issue from boot and motherboard faults."
      },
      {
        "prompt": "Which is NOT appropriate on a clinical device?",
        "options": [
          "Copying possible patient data onto personal USB media",
          "Recording approved service actions",
          "Escalating failed storage tests"
        ],
        "correct": 0,
        "why": "Sensitive information must stay in approved systems."
      }
    ],
    "lab": {
      "brief": "A desktop displays intermittent boot failures. The approved HP diagnostics utility reports a failed storage test with an error ID.",
      "steps": [
        {
          "prompt": "What is the strongest evidence?",
          "options": [
            "OEM storage diagnostic failure",
            "Desktop wallpaper",
            "User's email signature"
          ],
          "correct": 0,
          "why": "A failed OEM test provides stronger evidence than guessing."
        },
        {
          "prompt": "What action should come before replacing the drive?",
          "options": [
            "Follow backup/data handling, encryption and device servicing procedures",
            "Copy patient files to a personal drive",
            "Delete the device record"
          ],
          "correct": 0,
          "why": "Protect data and follow authorized service process."
        },
        {
          "prompt": "What should the ticket record?",
          "options": [
            "Model/serial, diagnostic ID, work performed and validation",
            "Only the word 'fixed'",
            "Employee passwords"
          ],
          "correct": 0,
          "why": "Detailed asset and diagnostic records support repair and warranty workflows."
        }
      ],
      "practice": [
        "Identify RAM, SSD, power supply, fans and motherboard in a spare device or exploded-view diagram.",
        "Review HP's diagnostic tool menus in the video.",
        "Write a safe SSD replacement workflow without performing it on a managed computer."
      ],
      "notePrompt": "What safety and data checks would you perform before hardware replacement?"
    }
  },
  {
    "id": "peripherals",
    "day": 11,
    "title": "Printers, peripherals and mobile devices",
    "category": "Devices",
    "mins": 55,
    "level": "Refresh",
    "summary": "Support the devices that make a workstation functional beyond Windows.",
    "video": "_BhO_nYod0o",
    "videoTitle": "Troubleshooting printers, A+ 220-1201",
    "channel": "Professor Messer",
    "reading": [
      [
        "A+ mobile device and hardware training",
        "https://www.professormesser.com/free-a-plus-training/220-1201/220-1201-video/220-1201-training-course/"
      ],
      [
        "Mobile device troubleshooting video",
        "https://www.youtube.com/watch?v=huQwiY4kiko"
      ]
    ],
    "notes": [
      [
        "Printing is a chain",
        "Application, print queue, driver, network path and printer hardware all matter. Check where the job stops."
      ],
      [
        "Peripheral support",
        "USB docks, displays, scanners and keyboards can fail due to physical connections, drivers or device policies."
      ],
      [
        "Mobile access",
        "Work phones may use managed Wi-Fi, MDM enrollment, certificates or MFA. Never bypass organizational security controls."
      ]
    ],
    "brief": "A workstation can print to one shared printer but not another; the second queue shows jobs stuck while colleagues can print to that printer.",
    "steps": [
      [
        "What does this comparison suggest?",
        "The workstation's printer mapping, driver or local queue may be involved",
        "All printers are broken",
        "The whole network is offline",
        0,
        "A known-good printer and peer test help isolate workstation-specific issues."
      ],
      [
        "What should you check?",
        "Printer mapping, queue state, driver and error details",
        "Delete the user's account",
        "Reboot the hospital network",
        0,
        "Check the print path at the affected workstation."
      ],
      [
        "Once the supported fix works, what next?",
        "Print a test page, confirm with the user and document",
        "Walk away without testing",
        "Share the printer admin password",
        0,
        "Validate user outcome and record the change."
      ]
    ],
    "practice": [
      "On your own device, inspect installed printer settings and queues without modifying managed devices.",
      "Map a hypothetical print request from app to spooler to printer.",
      "Write a mobile Wi-Fi/MFA troubleshooting decision tree."
    ],
    "prompt": "Describe how you would isolate a printer problem affecting just one user.",
    "quiz": [
      {
        "prompt": "A local print queue has stuck jobs. Useful check?",
        "options": [
          "Spooler, queue, printer mapping and driver",
          "Camera lens",
          "Wallpaper"
        ],
        "correct": 0,
        "why": "Trace the print path."
      },
      {
        "prompt": "A second employee can print normally. That suggests?",
        "options": [
          "Potential client-specific issue",
          "Guaranteed server outage",
          "All cables are bad"
        ],
        "correct": 0,
        "why": "Comparison narrows the scope."
      },
      {
        "prompt": "An enrolled mobile device should be handled through?",
        "options": [
          "Approved MDM and access policies",
          "Personal account bypass",
          "Unauthorized unlock tools"
        ],
        "correct": 0,
        "why": "Use supported enterprise management."
      }
    ],
    "lab": {
      "brief": "A workstation can print to one shared printer but not another; the second queue shows jobs stuck while colleagues can print to that printer.",
      "steps": [
        {
          "prompt": "What does this comparison suggest?",
          "options": [
            "The workstation's printer mapping, driver or local queue may be involved",
            "All printers are broken",
            "The whole network is offline"
          ],
          "correct": 0,
          "why": "A known-good printer and peer test help isolate workstation-specific issues."
        },
        {
          "prompt": "What should you check?",
          "options": [
            "Printer mapping, queue state, driver and error details",
            "Delete the user's account",
            "Reboot the hospital network"
          ],
          "correct": 0,
          "why": "Check the print path at the affected workstation."
        },
        {
          "prompt": "Once the supported fix works, what next?",
          "options": [
            "Print a test page, confirm with the user and document",
            "Walk away without testing",
            "Share the printer admin password"
          ],
          "correct": 0,
          "why": "Validate user outcome and record the change."
        }
      ],
      "practice": [
        "On your own device, inspect installed printer settings and queues without modifying managed devices.",
        "Map a hypothetical print request from app to spooler to printer.",
        "Write a mobile Wi-Fi/MFA troubleshooting decision tree."
      ],
      "notePrompt": "Describe how you would isolate a printer problem affecting just one user."
    }
  },
  {
    "id": "hipaa",
    "day": 12,
    "title": "Healthcare IT security and privacy",
    "category": "Healthcare",
    "mins": 60,
    "level": "Hospital-specific",
    "summary": "Understand what changes when troubleshooting can affect patient care and protected data.",
    "video": "BhQa_pF1C24",
    "videoTitle": "Protecting Health Information",
    "channel": "U.S. Health IT / ONC",
    "reading": [
      [
        "HHS HIPAA Security Rule summary",
        "https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html"
      ],
      [
        "HHS security guidance",
        "https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html"
      ]
    ],
    "notes": [
      [
        "Protect information",
        "Do not access patient records beyond authorization. Follow access, logging, minimum necessary and security procedures applicable to your role."
      ],
      [
        "Workstation handling",
        "A broken drive, printout or unlocked workstation may expose data. Use approved replacement, encryption and disposal processes."
      ],
      [
        "Patient care comes first",
        "Escalate urgent clinical system disruptions and follow approved downtime procedures. Do not improvise insecure workarounds."
      ]
    ],
    "brief": "A user asks you to copy files from a failing workstation to their personal USB drive. The workstation may contain electronic protected health information.",
    "steps": [
      [
        "What is the safe response?",
        "Decline the personal USB transfer and follow approved secure recovery procedures",
        "Copy everything quickly",
        "Email the files to your own address",
        0,
        "Patient data must be handled using approved secure mechanisms."
      ],
      [
        "The workstation is in a busy care area. What matters?",
        "Protect access and coordinate patient-care continuity",
        "Leave the computer unlocked",
        "Disable login protections",
        0,
        "Coordinate secure access with clinical workflow."
      ],
      [
        "If an exposure may have occurred?",
        "Report to the designated security/privacy team according to policy",
        "Hide the event",
        "Delete all logs",
        0,
        "Prompt reporting supports an appropriate response."
      ]
    ],
    "practice": [
      "Read the HHS Security Rule overview and name its three safeguard categories.",
      "Describe a safe data-bearing drive replacement workflow.",
      "Write a two-sentence escalation for a suspected privacy incident, without personal data."
    ],
    "prompt": "How would you explain to a clinician why you cannot use a personal USB drive?",
    "quiz": [
      {
        "prompt": "Which belongs in an approved secure process?",
        "options": [
          "Handling PHI with organizational controls",
          "Personal USB backups",
          "Sharing passwords"
        ],
        "correct": 0,
        "why": "Approved safeguards protect electronic PHI."
      },
      {
        "prompt": "A suspected privacy event should be?",
        "options": [
          "Reported through the designated channel",
          "Ignored if inconvenient",
          "Posted publicly"
        ],
        "correct": 0,
        "why": "Use established incident reporting."
      },
      {
        "prompt": "Which best describes healthcare IT priorities?",
        "options": [
          "Availability and security both matter",
          "Speed always overrides safeguards",
          "Every issue is low priority"
        ],
        "correct": 0,
        "why": "Clinical continuity and confidentiality must both be protected."
      }
    ],
    "lab": {
      "brief": "A user asks you to copy files from a failing workstation to their personal USB drive. The workstation may contain electronic protected health information.",
      "steps": [
        {
          "prompt": "What is the safe response?",
          "options": [
            "Decline the personal USB transfer and follow approved secure recovery procedures",
            "Copy everything quickly",
            "Email the files to your own address"
          ],
          "correct": 0,
          "why": "Patient data must be handled using approved secure mechanisms."
        },
        {
          "prompt": "The workstation is in a busy care area. What matters?",
          "options": [
            "Protect access and coordinate patient-care continuity",
            "Leave the computer unlocked",
            "Disable login protections"
          ],
          "correct": 0,
          "why": "Coordinate secure access with clinical workflow."
        },
        {
          "prompt": "If an exposure may have occurred?",
          "options": [
            "Report to the designated security/privacy team according to policy",
            "Hide the event",
            "Delete all logs"
          ],
          "correct": 0,
          "why": "Prompt reporting supports an appropriate response."
        }
      ],
      "practice": [
        "Read the HHS Security Rule overview and name its three safeguard categories.",
        "Describe a safe data-bearing drive replacement workflow.",
        "Write a two-sentence escalation for a suspected privacy incident, without personal data."
      ],
      "notePrompt": "How would you explain to a clinician why you cannot use a personal USB drive?"
    }
  },
  {
    "id": "tickets",
    "day": 13,
    "title": "Ticket quality, A+ and technical interviews",
    "category": "Service operations",
    "mins": 65,
    "level": "Interview",
    "summary": "Practice clear case notes, escalation, common A+ objectives and concise interview answers.",
    "video": "ffxcYXw7aD0",
    "videoTitle": "CompTIA A+ 220-1202 practice study group",
    "channel": "Professor Messer",
    "reading": [
      [
        "CompTIA A+ objectives and exam info",
        "https://www.comptia.org/en-us/certifications/a/"
      ],
      [
        "Core 2 training course",
        "https://www.professormesser.com/free-a-plus-training/220-1202/220-1202-video/220-1202-training-course/"
      ]
    ],
    "notes": [
      [
        "Ticket anatomy",
        "Record impact, device/user identifiers allowed by policy, exact errors, tests, actions, result, and next owner."
      ],
      [
        "A+ expectations",
        "The posting prefers A+ and requires it within six months if not already certified. HP Self Maintainer is also required within six months."
      ],
      [
        "Interview delivery",
        "Use situation, action and result; show how you isolate problems and protect users, not only a list of technologies."
      ]
    ],
    "brief": "An engineer receives an escalation ticket reading only 'Windows broken, please fix.' You need to improve the ticket before reassignment.",
    "steps": [
      [
        "What key information is missing?",
        "Scope, exact symptom, timestamp, device and attempted tests",
        "The employee's favorite food",
        "A random support article",
        0,
        "Specific details support reproducibility and routing."
      ],
      [
        "Which is a strong action note?",
        "Checked sign-in error, verified network and domain access, collected event time",
        "Nothing works",
        "Please fix ASAP",
        0,
        "Objective steps help the next technician."
      ],
      [
        "How should an interview example end?",
        "Explain user outcome, verification and documentation",
        "Only mention that you are smart",
        "Blame the user",
        0,
        "Demonstrate actual resolution and ownership."
      ]
    ],
    "practice": [
      "Rewrite a one-line ticket as a clear incident report.",
      "Record a 90-second spoken answer to 'A nurse cannot log in. What do you do?'",
      "Review current CompTIA A+ Core 1 and Core 2 objectives and mark weak areas."
    ],
    "prompt": "Draft a 60-second interview answer using an actual support situation from your career.",
    "quiz": [
      {
        "prompt": "Which item is helpful in ticket notes?",
        "options": [
          "Timestamp and tests",
          "Passwords",
          "Unverified guesses stated as fact"
        ],
        "correct": 0,
        "why": "Good ticket notes support continuity."
      },
      {
        "prompt": "According to the position, A+ is?",
        "options": [
          "Preferred, then required within six months if not current",
          "Never relevant",
          "Required before you can apply"
        ],
        "correct": 0,
        "why": "The posting has a six-month certification requirement."
      },
      {
        "prompt": "What makes an interview example stronger?",
        "options": [
          "Clear situation, action and result",
          "Only buzzwords",
          "Unverified metrics"
        ],
        "correct": 0,
        "why": "Concrete evidence builds trust."
      }
    ],
    "lab": {
      "brief": "An engineer receives an escalation ticket reading only 'Windows broken, please fix.' You need to improve the ticket before reassignment.",
      "steps": [
        {
          "prompt": "What key information is missing?",
          "options": [
            "Scope, exact symptom, timestamp, device and attempted tests",
            "The employee's favorite food",
            "A random support article"
          ],
          "correct": 0,
          "why": "Specific details support reproducibility and routing."
        },
        {
          "prompt": "Which is a strong action note?",
          "options": [
            "Checked sign-in error, verified network and domain access, collected event time",
            "Nothing works",
            "Please fix ASAP"
          ],
          "correct": 0,
          "why": "Objective steps help the next technician."
        },
        {
          "prompt": "How should an interview example end?",
          "options": [
            "Explain user outcome, verification and documentation",
            "Only mention that you are smart",
            "Blame the user"
          ],
          "correct": 0,
          "why": "Demonstrate actual resolution and ownership."
        }
      ],
      "practice": [
        "Rewrite a one-line ticket as a clear incident report.",
        "Record a 90-second spoken answer to 'A nurse cannot log in. What do you do?'",
        "Review current CompTIA A+ Core 1 and Core 2 objectives and mark weak areas."
      ],
      "notePrompt": "Draft a 60-second interview answer using an actual support situation from your career."
    }
  },
  {
    "id": "capstone",
    "day": 14,
    "title": "Final shift: the hospital support simulation",
    "category": "Capstone",
    "mins": 90,
    "level": "Final assessment",
    "summary": "Put everything together across a multi-system clinical support incident.",
    "video": "VnbBxxyZLc8",
    "videoTitle": "How the HIPAA Security Rule Helps Defend Against Cyber-Attacks",
    "channel": "HHS Office for Civil Rights",
    "reading": [
      [
        "Southcoast PC Technician qualifications",
        "https://southcoasthealthcareers.org/job/2811/personal-computer-technician-information-technology-us-ma-new-bedford-101-page-st/"
      ],
      [
        "HHS cybersecurity guidance",
        "https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/index.html"
      ]
    ],
    "notes": [
      [
        "Differentiate incidents",
        "A login failure, a failed DHCP lease, a DNS mismatch and a failed SSD call for different tests and escalations."
      ],
      [
        "Support clinical workflows",
        "Confirm affected units, communicate status, use approved downtime steps and never expose credentials or protected health information."
      ],
      [
        "Finish as a professional",
        "Keep a clean ticket trail, verify service with the user and identify follow-up prevention. Your experience at LogMeIn, Experian and MA2K is directly relevant."
      ]
    ],
    "brief": "Final assessment: multiple clinical workstations lose access to a charting portal. Affected systems have valid IP addresses and can reach the application server by IP, but a hostname lookup fails. At the same time a clinician reports an account lockout.",
    "steps": [
      [
        "What should you prioritize and test first?",
        "Assess scope and clinical impact, then investigate DNS resolution",
        "Reimage every workstation immediately",
        "Ignore unit-wide reports and fix the printer",
        0,
        "Triage the larger outage and use the clues to test name resolution."
      ],
      [
        "A workstation uses the wrong DNS server. What is the proper response?",
        "Use authorized network configuration procedures and escalate shared issues to networking",
        "Switch to any public DNS without approval",
        "Tell the user the computer is broken beyond repair",
        0,
        "Domain-based applications require correct internal resolution; follow change processes."
      ],
      [
        "The clinician's account remains locked after the network issue resolves. What next?",
        "Verify identity, check authorized AD lockout diagnostics and coordinate an approved unlock",
        "Ask for their password",
        "Disable lockout policy for everyone",
        0,
        "Treat the account incident separately, verify identity and trace repeated bad credentials."
      ]
    ],
    "practice": [
      "Write a complete P1-style incident ticket with impact, evidence, escalation and communication.",
      "Verbally explain the DNS failure and account lockout as two distinct problems.",
      "Revisit any module with a quiz score below 67% and repeat its lab."
    ],
    "prompt": "Write your full incident response: triage, tests, escalation, data protection, user confirmation.",
    "quiz": [
      {
        "prompt": "Valid IP, reachable server IP, failed hostname. Most likely issue?",
        "options": [
          "DNS",
          "Monitor",
          "RAM"
        ],
        "correct": 0,
        "why": "The hostname failure isolates name resolution."
      },
      {
        "prompt": "When multiple clinical units are affected, you should?",
        "options": [
          "Prioritize impact, communicate and escalate",
          "Work silently for hours",
          "Ask every user to reinstall Windows"
        ],
        "correct": 0,
        "why": "Rapid coordinated response supports care."
      },
      {
        "prompt": "What confirms successful completion?",
        "options": [
          "Service restored, users confirm, findings documented",
          "An untested change",
          "A closed ticket with no notes"
        ],
        "correct": 0,
        "why": "Resolution requires verification and records."
      }
    ],
    "lab": {
      "brief": "Final assessment: multiple clinical workstations lose access to a charting portal. Affected systems have valid IP addresses and can reach the application server by IP, but a hostname lookup fails. At the same time a clinician reports an account lockout.",
      "steps": [
        {
          "prompt": "What should you prioritize and test first?",
          "options": [
            "Assess scope and clinical impact, then investigate DNS resolution",
            "Reimage every workstation immediately",
            "Ignore unit-wide reports and fix the printer"
          ],
          "correct": 0,
          "why": "Triage the larger outage and use the clues to test name resolution."
        },
        {
          "prompt": "A workstation uses the wrong DNS server. What is the proper response?",
          "options": [
            "Use authorized network configuration procedures and escalate shared issues to networking",
            "Switch to any public DNS without approval",
            "Tell the user the computer is broken beyond repair"
          ],
          "correct": 0,
          "why": "Domain-based applications require correct internal resolution; follow change processes."
        },
        {
          "prompt": "The clinician's account remains locked after the network issue resolves. What next?",
          "options": [
            "Verify identity, check authorized AD lockout diagnostics and coordinate an approved unlock",
            "Ask for their password",
            "Disable lockout policy for everyone"
          ],
          "correct": 0,
          "why": "Treat the account incident separately, verify identity and trace repeated bad credentials."
        }
      ],
      "practice": [
        "Write a complete P1-style incident ticket with impact, evidence, escalation and communication.",
        "Verbally explain the DNS failure and account lockout as two distinct problems.",
        "Revisit any module with a quiz score below 67% and repeat its lab."
      ],
      "notePrompt": "Write your full incident response: triage, tests, escalation, data protection, user confirmation."
    }
  }
];
