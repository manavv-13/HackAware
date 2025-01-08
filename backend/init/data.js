const sampleData = [
  {
    "name": "Spear Phishing Attack",
    "description": "A scenario simulating a targeted phishing attack using social engineering.",
    "impact": "Possible exposure of corporate credentials and sensitive data.",
    "preventiveMeasures": "Verify sender identity, use two-factor authentication, avoid sharing sensitive information online.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You receive an email with a link to review a financial document.",
        "choices": [
          {
            "decision": "Click the link without verification",
            "outcome": "Your credentials are compromised.",
            "isCorrect": false,
            "nextStep": 2
          },
          {
            "decision": "Verify sender before clicking",
            "outcome": "You avoid a potential phishing threat.",
            "isCorrect": true,
            "nextStep": 2
          }
        ]
      },
      {
        "stepNumber": 2,
        "description": "A follow-up email requests your phone number for 'verification purposes.'",
        "choices": [
          {
            "decision": "Provide your phone number",
            "outcome": "The attacker now has your contact information.",
            "isCorrect": false,
            "nextStep": 3
          },
          {
            "decision": "Ignore the email",
            "outcome": "No sensitive information is shared.",
            "isCorrect": true,
            "nextStep": 3
          }
        ]
      },
      {
        "stepNumber": 3,
        "description": "You receive a call from 'IT support' asking for your employee ID.",
        "choices": [
          {
            "decision": "Provide the ID",
            "outcome": "Your employee ID is compromised.",
            "isCorrect": false,
            "nextStep": 4
          },
          {
            "decision": "Verify the caller's identity",
            "outcome": "The caller is revealed to be fake.",
            "isCorrect": true,
            "nextStep": 4
          }
        ]
      },
      {
        "stepNumber": 4,
        "description": "An email from an impersonated supervisor requests you to log into a shared portal.",
        "choices": [
          {
            "decision": "Log in through the provided link",
            "outcome": "Your credentials are phished.",
            "isCorrect": false,
            "nextStep": 5
          },
          {
            "decision": "Do not click suspicious links",
            "outcome": "You avoid a phishing attempt.",
            "isCorrect": true,
            "nextStep": 5
          }
        ]
      },
      {
        "stepNumber": 5,
        "description": "A follow-up email tries to confirm your supervisor's name and department.",
        "choices": [
          {
            "decision": "Reply with details",
            "outcome": "The attacker gains information about your team.",
            "isCorrect": false,
            "nextStep": 6
          },
          {
            "decision": "Report the email to IT",
            "outcome": "IT blocks the impersonation attempt.",
            "isCorrect": true,
            "nextStep": 6
          }
        ]
      },
      {
        "stepNumber": 6,
        "description": "The attacker asks for a temporary password to access a project.",
        "choices": [
          {
            "decision": "Provide a temporary password",
            "outcome": "The attacker gains unauthorized access.",
            "isCorrect": false,
            "nextStep": 7
          },
          {
            "decision": "Ignore the request",
            "outcome": "You prevent unauthorized access.",
            "isCorrect": true,
            "nextStep": 7
          }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A new email appears, posing as an internal survey.",
        "choices": [
          {
            "decision": "Complete the survey",
            "outcome": "Sensitive information is disclosed.",
            "isCorrect": false,
            "nextStep": 8
          },
          {
            "decision": "Do not fill out suspicious surveys",
            "outcome": "You avoid potential data leakage.",
            "isCorrect": true,
            "nextStep": 8
          }
        ]
      },
      {
        "stepNumber": 8,
        "description": "An email attachment labeled as a 'Project Brief' asks you to enable macros.",
        "choices": [
          {
            "decision": "Enable macros",
            "outcome": "Malware is activated.",
            "isCorrect": false,
            "nextStep": 9
          },
          {
            "decision": "Avoid enabling macros on unverified documents",
            "outcome": "You avoid a malware infection.",
            "isCorrect": true,
            "nextStep": 9
          }
        ]
      },
      {
        "stepNumber": 9,
        "description": "The attacker asks you to forward sensitive documents by email.",
        "choices": [
          {
            "decision": "Forward the documents",
            "outcome": "Sensitive data is exposed.",
            "isCorrect": false,
            "nextStep": 10
          },
          {
            "decision": "Refuse to forward sensitive documents",
            "outcome": "You avoid data exposure.",
            "isCorrect": true,
            "nextStep": 10
          }
        ]
      },
      {
        "stepNumber": 10,
        "description": "The organization requests reports on any recent suspicious emails.",
        "choices": [
          {
            "decision": "Submit a detailed report",
            "outcome": "The phishing attempt is tracked and stopped.",
            "isCorrect": true
          },
          {
            "decision": "Ignore the request",
            "outcome": "The phishing threat remains active.",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  {
    "name": "Malware Download Simulation",
    "description": "A scenario simulating an attempt to trick the user into downloading malware.",
    "impact": "Potential infection with spyware or ransomware.",
    "preventiveMeasures": "Only download from trusted sources, use antivirus software, verify email attachments.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You receive an email prompting you to download a software update.",
        "choices": [
          {
            "decision": "Download the update immediately",
            "outcome": "Your system is infected with malware.",
            "isCorrect": false,
            "nextStep": 2
          },
          {
            "decision": "Verify the update source first",
            "outcome": "You avoid the malware download.",
            "isCorrect": true,
            "nextStep": 2
          }
        ]
      },
      {
        "stepNumber": 2,
        "description": "The email contains a Word document attachment asking you to enable macros.",
        "choices": [
          {
            "decision": "Enable macros",
            "outcome": "Malware is activated on your system.",
            "isCorrect": false,
            "nextStep": 3
          },
          {
            "decision": "Do not enable macros",
            "outcome": "You avoid a malware infection.",
            "isCorrect": true,
            "nextStep": 3
          }
        ]
      },
      {
        "stepNumber": 3,
        "description": "A pop-up message on your screen asks you to install a security update.",
        "choices": [
          {
            "decision": "Install the update",
            "outcome": "Malware is installed.",
            "isCorrect": false,
            "nextStep": 4
          },
          {
            "decision": "Verify the source of the update",
            "outcome": "You avoid malware installation.",
            "isCorrect": true,
            "nextStep": 4
          }
        ]
      },
      {
        "stepNumber": 4,
        "description": "A fake antivirus alert prompts you to scan your device.",
        "choices": [
          {
            "decision": "Run the scan",
            "outcome": "Malware infects your system.",
            "isCorrect": false,
            "nextStep": 5
          },
          {
            "decision": "Ignore and close the alert",
            "outcome": "You avoid the malware trap.",
            "isCorrect": true,
            "nextStep": 5
          }
        ]
      },
      {
        "stepNumber": 5,
        "description": "A website claims your device is at risk and asks you to download protection software.",
        "choices": [
          {
            "decision": "Download the software",
            "outcome": "You unknowingly install spyware.",
            "isCorrect": false,
            "nextStep": 6
          },
          {
            "decision": "Do not download anything from untrusted websites",
            "outcome": "You avoid a spyware infection.",
            "isCorrect": true,
            "nextStep": 6
          }
        ]
      },
      {
        "stepNumber": 6,
        "description": "An email attachment claims to contain a work-related document.",
        "choices": [
          {
            "decision": "Open the attachment",
            "outcome": "Your system is infected with ransomware.",
            "isCorrect": false,
            "nextStep": 7
          },
          {
            "decision": "Verify the sender before opening",
            "outcome": "You avoid the ransomware infection.",
            "isCorrect": true,
            "nextStep": 7
          }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A pop-up prompts you to update your password due to 'unusual activity.'",
        "choices": [
          {
            "decision": "Click the link and update the password",
            "outcome": "Your credentials are stolen.",
            "isCorrect": false,
            "nextStep": 8
          },
          {
            "decision": "Verify the request with IT",
            "outcome": "The phishing attempt is identified.",
            "isCorrect": true,
            "nextStep": 8
          }
        ]
      },
      {
        "stepNumber": 8,
        "description": "An email prompts you to download software for a meeting.",
        "choices": [
          {
            "decision": "Download the software",
            "outcome": "Your system is infected with malware.",
            "isCorrect": false,
            "nextStep": 9
          },
          {
            "decision": "Confirm with the meeting organizer first",
            "outcome": "You avoid the malware.",
            "isCorrect": true,
            "nextStep": 9
          }
        ]
      },
      {
        "stepNumber": 9,
        "description": "You receive a social media message with a suspicious link from a colleague.",
        "choices": [
          {
            "decision": "Click the link",
            "outcome": "Your account is compromised.",
            "isCorrect": false,
            "nextStep": 10
          },
          {
            "decision": "Ignore the link",
            "outcome": "You avoid account compromise.",
            "isCorrect": true,
            "nextStep": 10
          }
        ]
      },
      {
        "stepNumber": 10,
        "description": "An IT alert recommends a malware scan.",
        "choices": [
          {
            "decision": "Perform the scan using official software",
            "outcome": "No malware detected.",
            "isCorrect": true
          },
          {
            "decision": "Ignore the alert",
            "outcome": "Malware may go undetected.",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  {
    "name": "Unauthorized Cloud Access",
    "description": "A scenario simulating an attacker trying to gain unauthorized access to cloud storage.",
    "impact": "Possible exposure of sensitive files and customer data.",
    "preventiveMeasures": "Use two-factor authentication, limit access permissions, monitor access logs regularly.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You receive an email from an unknown user requesting file access.",
        "choices": [
          {
            "decision": "Grant access",
            "outcome": "Unauthorized user gains access.",
            "isCorrect": false,
            "nextStep": 2
          },
          {
            "decision": "Verify the request",
            "outcome": "No access is granted to unauthorized users.",
            "isCorrect": true,
            "nextStep": 2
          }
        ]
      },
      {
        "stepNumber": 2,
        "description": "A cloud provider notification requests that you reset your password.",
        "choices": [
          {
            "decision": "Click the link in the email",
            "outcome": "Your password is stolen.",
            "isCorrect": false,
            "nextStep": 3
          },
          {
            "decision": "Verify the request on the official website",
            "outcome": "You avoid a phishing attempt.",
            "isCorrect": true,
            "nextStep": 3
          }
        ]
      },
      {
        "stepNumber": 3,
        "description": "A login attempt from an unknown device is detected.",
        "choices": [
          {
            "decision": "Ignore the alert",
            "outcome": "The attacker gains access to the cloud account.",
            "isCorrect": false,
            "nextStep": 4
          },
          {
            "decision": "Secure your account and change passwords",
            "outcome": "Unauthorized access is blocked.",
            "isCorrect": true,
            "nextStep": 4
          }
        ]
      },
      {
        "stepNumber": 4,
        "description": "You receive a request for API access to certain files.",
        "choices": [
          {
            "decision": "Grant API access",
            "outcome": "Attacker gains API access to data.",
            "isCorrect": false,
            "nextStep": 5
          },
          {
            "decision": "Verify the request before granting access",
            "outcome": "You prevent unauthorized API access.",
            "isCorrect": true,
            "nextStep": 5
          }
        ]
      },
      {
        "stepNumber": 5,
        "description": "An email attachment promises 'enhanced cloud storage security.'",
        "choices": [
          {
            "decision": "Download and install the attachment",
            "outcome": "Malware is installed.",
            "isCorrect": false,
            "nextStep": 6
          },
          {
            "decision": "Do not open suspicious attachments",
            "outcome": "Malware is avoided.",
            "isCorrect": true,
            "nextStep": 6
          }
        ]
      },
      {
        "stepNumber": 6,
        "description": "A new admin user appears in your cloud management console.",
        "choices": [
          {
            "decision": "Ignore the new user",
            "outcome": "The unauthorized user retains access.",
            "isCorrect": false,
            "nextStep": 7
          },
          {
            "decision": "Investigate and remove unauthorized users",
            "outcome": "Unauthorized access is prevented.",
            "isCorrect": true,
            "nextStep": 7
          }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A request to share a sensitive folder arrives from an unknown account.",
        "choices": [
          {
            "decision": "Share the folder",
            "outcome": "Sensitive information is exposed.",
            "isCorrect": false,
            "nextStep": 8
          },
          {
            "decision": "Deny the request and report it",
            "outcome": "Unauthorized sharing is prevented.",
            "isCorrect": true,
            "nextStep": 8
          }
        ]
      },
      {
        "stepNumber": 8,
        "description": "An application asks for access to your cloud storage.",
        "choices": [
          {
            "decision": "Grant full access",
            "outcome": "Application has unrestricted access to your data.",
            "isCorrect": false,
            "nextStep": 9
          },
          {
            "decision": "Grant only necessary permissions",
            "outcome": "You maintain security over your data.",
            "isCorrect": true,
            "nextStep": 9
          }
        ]
      },
      {
        "stepNumber": 9,
        "description": "A notification suggests enabling a weak security protocol for ease of access.",
        "choices": [
          {
            "decision": "Enable the weak protocol",
            "outcome": "Your cloud storage is vulnerable.",
            "isCorrect": false,
            "nextStep": 10
          },
          {
            "decision": "Maintain strong security protocols",
            "outcome": "Your data remains secure.",
            "isCorrect": true,
            "nextStep": 10
          }
        ]
      },
      {
        "stepNumber": 10,
        "description": "An admin notification asks for confirmation on a security change you did not initiate.",
        "choices": [
          {
            "decision": "Approve the change",
            "outcome": "Security is compromised.",
            "isCorrect": false
          },
          {
            "decision": "Deny and investigate the request",
            "outcome": "Unauthorized access is blocked.",
            "isCorrect": true
          }
        ]
      }
    ]
  },
  {
    "name": "Social Media Data Leak",
    "description": "A scenario where an attacker uses social media tactics to obtain sensitive information.",
    "impact": "Potential leakage of personal and corporate information.",
    "preventiveMeasures": "Avoid oversharing on social media, use privacy settings, be cautious with unknown friend requests.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You receive a friend request from an unknown person claiming to work in your industry.",
        "choices": [
          {
            "decision": "Accept the request",
            "outcome": "You unknowingly connect with a scammer.",
            "isCorrect": false,
            "nextStep": 2
          },
          {
            "decision": "Verify the person before accepting",
            "outcome": "You avoid a potential scammer.",
            "isCorrect": true,
            "nextStep": 2
          }
        ]
      },
      {
        "stepNumber": 2,
        "description": "A post asks you to share work achievements publicly.",
        "choices": [
          {
            "decision": "Post details of recent projects",
            "outcome": "Sensitive project information is publicly visible.",
            "isCorrect": false,
            "nextStep": 3
          },
          {
            "decision": "Avoid sharing confidential information",
            "outcome": "Sensitive information remains secure.",
            "isCorrect": true,
            "nextStep": 3
          }
        ]
      },
      {
        "stepNumber": 3,
        "description": "A message asks for details on your department and supervisor.",
        "choices": [
          {
            "decision": "Provide the requested details",
            "outcome": "Attacker gathers organizational information.",
            "isCorrect": false,
            "nextStep": 4
          },
          {
            "decision": "Refuse to disclose sensitive information",
            "outcome": "Your organization remains secure.",
            "isCorrect": true,
            "nextStep": 4
          }
        ]
      },
      {
        "stepNumber": 4,
        "description": "An unknown account tags you in a suspicious post.",
        "choices": [
          {
            "decision": "Click on the post",
            "outcome": "Your account is exposed to phishing.",
            "isCorrect": false,
            "nextStep": 5
          },
          {
            "decision": "Report and ignore the tag",
            "outcome": "You avoid potential phishing.",
            "isCorrect": true,
            "nextStep": 5
          }
        ]
      },
      {
        "stepNumber": 5,
        "description": "You receive a direct message asking about company security policies.",
        "choices": [
          {
            "decision": "Respond to the message",
            "outcome": "Potential insider information leak.",
            "isCorrect": false,
            "nextStep": 6
          },
          {
            "decision": "Ignore and report the message",
            "outcome": "You avoid insider information leak.",
            "isCorrect": true,
            "nextStep": 6
          }
        ]
      },
      {
        "stepNumber": 6,
        "description": "A post invites employees to upload work photos to social media.",
        "choices": [
          {
            "decision": "Upload work photos",
            "outcome": "Office layout and documents are unintentionally exposed.",
            "isCorrect": false,
            "nextStep": 7
          },
          {
            "decision": "Avoid posting sensitive work content",
            "outcome": "Sensitive information remains secure.",
            "isCorrect": true,
            "nextStep": 7
          }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A notification claims unusual login activity on your social media account.",
        "choices": [
          {
            "decision": "Click the link to verify",
            "outcome": "Phishing page collects your credentials.",
            "isCorrect": false,
            "nextStep": 8
          },
          {
            "decision": "Log in through official channels",
            "outcome": "You avoid a phishing attempt.",
            "isCorrect": true,
            "nextStep": 8
          }
        ]
      },
      {
        "stepNumber": 8,
        "description": "An unknown account requests you join a private group for industry insights.",
        "choices": [
          {
            "decision": "Join the group",
            "outcome": "Scammers have access to your profile and contacts.",
            "isCorrect": false,
            "nextStep": 9
          },
          {
            "decision": "Avoid joining unknown groups",
            "outcome": "Your profile remains secure.",
            "isCorrect": true,
            "nextStep": 9
          }
        ]
      },
      {
        "stepNumber": 9,
        "description": "An online survey asks for details on your job role.",
        "choices": [
          {
            "decision": "Complete the survey",
            "outcome": "Potential for social engineering attack.",
            "isCorrect": false,
            "nextStep": 10
          },
          {
            "decision": "Decline to provide information",
            "outcome": "You avoid a social engineering attack.",
            "isCorrect": true,
            "nextStep": 10
          }
        ]
      },
      {
        "stepNumber": 10,
        "description": "An invitation offers rewards for sharing your company’s upcoming plans.",
        "choices": [
          {
            "decision": "Share future plans",
            "outcome": "Sensitive corporate strategy is exposed.",
            "isCorrect": false
          },
          {
            "decision": "Decline to share confidential information",
            "outcome": "Corporate information remains secure.",
            "isCorrect": true
          }
        ]
      }
    ]
  },
  {
    "name": "Ransomware Attack Simulation",
    "description": "A simulation where attackers attempt to encrypt your files and demand ransom.",
    "impact": "Potential loss of access to critical data and financial loss.",
    "preventiveMeasures": "Regular backups, avoid clicking unknown links, use reliable anti-malware software.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You receive an email with an attachment named 'Urgent_Invoice.pdf.exe'.",
        "choices": [
          { "decision": "Download and open the attachment", "outcome": "Ransomware installs and begins encrypting files.", "isCorrect": false, "nextStep": 2 },
          { "decision": "Delete the email without opening", "outcome": "You avoid the ransomware.", "isCorrect": true, "nextStep": 2 }
        ]
      },
      {
        "stepNumber": 2,
        "description": "A pop-up requests access permissions for your files.",
        "choices": [
          { "decision": "Grant access", "outcome": "Ransomware gains access to files.", "isCorrect": false, "nextStep": 3 },
          { "decision": "Deny access", "outcome": "Ransomware is blocked.", "isCorrect": true, "nextStep": 3 }
        ]
      },
      {
        "stepNumber": 3,
        "description": "A message appears demanding ransom to decrypt files.",
        "choices": [
          { "decision": "Pay the ransom", "outcome": "Data remains encrypted.", "isCorrect": false, "nextStep": 4 },
          { "decision": "Contact IT for help", "outcome": "IT works on recovering files from backups.", "isCorrect": true, "nextStep": 4 }
        ]
      },
      {
        "stepNumber": 4,
        "description": "You consider securing your backup.",
        "choices": [
          { "decision": "Create offline backups", "outcome": "Files are secured.", "isCorrect": true, "nextStep": 5 },
          { "decision": "Ignore backups", "outcome": "Future ransomware attacks may succeed.", "isCorrect": false, "nextStep": 5 }
        ]
      },
      {
        "stepNumber": 5,
        "description": "You see an unknown app on your desktop.",
        "choices": [
          { "decision": "Uninstall the app immediately", "outcome": "You remove potential malware.", "isCorrect": true, "nextStep": 6 },
          { "decision": "Ignore the app", "outcome": "The app collects data.", "isCorrect": false, "nextStep": 6 }
        ]
      },
      {
        "stepNumber": 6,
        "description": "IT asks you to change passwords.",
        "choices": [
          { "decision": "Change all passwords", "outcome": "Passwords are secured.", "isCorrect": true, "nextStep": 7 },
          { "decision": "Keep current passwords", "outcome": "Accounts remain at risk.", "isCorrect": false, "nextStep": 7 }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A suspicious file download starts automatically.",
        "choices": [
          { "decision": "Cancel the download immediately", "outcome": "You prevent malware installation.", "isCorrect": true, "nextStep": 8 },
          { "decision": "Let it finish", "outcome": "Malware installs on your system.", "isCorrect": false, "nextStep": 8 }
        ]
      },
      {
        "stepNumber": 8,
        "description": "You see unusual activity in your task manager.",
        "choices": [
          { "decision": "Investigate the process", "outcome": "You find and terminate malware.", "isCorrect": true, "nextStep": 9 },
          { "decision": "Ignore it", "outcome": "Malware continues running.", "isCorrect": false, "nextStep": 9 }
        ]
      },
      {
        "stepNumber": 9,
        "description": "IT suggests enabling multi-factor authentication (MFA).",
        "choices": [
          { "decision": "Enable MFA on all accounts", "outcome": "Accounts are more secure.", "isCorrect": true, "nextStep": 10 },
          { "decision": "Skip MFA", "outcome": "Accounts remain vulnerable.", "isCorrect": false, "nextStep": 10 }
        ]
      },
      {
        "stepNumber": 10,
        "description": "A week later, you receive another suspicious email with attachments.",
        "choices": [
          { "decision": "Delete the email immediately", "outcome": "You avoid a repeated ransomware attempt.", "isCorrect": true },
          { "decision": "Open the attachment", "outcome": "Another ransomware attack occurs.", "isCorrect": false }
        ]
      }
    ]
  },
  {
    "name": "Corporate Espionage Attempt",
    "description": "A scenario where a competitor attempts to gain access to your confidential data.",
    "impact": "Loss of competitive advantage and exposure of trade secrets.",
    "preventiveMeasures": "Limit access to sensitive data, monitor for unusual account activity, use data loss prevention (DLP) tools.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "An unknown user requests access to project files.",
        "choices": [
          { "decision": "Grant access", "outcome": "Competitor gains access to confidential information.", "isCorrect": false, "nextStep": 2 },
          { "decision": "Deny and report", "outcome": "Data remains protected.", "isCorrect": true, "nextStep": 2 }
        ]
      },
      {
        "stepNumber": 2,
        "description": "You find an email from the competitor in your inbox.",
        "choices": [
          { "decision": "Reply to the email", "outcome": "You inadvertently share sensitive information.", "isCorrect": false, "nextStep": 3 },
          { "decision": "Ignore the email", "outcome": "Sensitive data is kept secure.", "isCorrect": true, "nextStep": 3 }
        ]
      },
      {
        "stepNumber": 3,
        "description": "You find a USB drive left on your desk with no label.",
        "choices": [
          { "decision": "Insert the USB into your computer", "outcome": "Malware from the USB steals sensitive files.", "isCorrect": false, "nextStep": 4 },
          { "decision": "Report the USB to IT", "outcome": "Malware is quarantined and removed.", "isCorrect": true, "nextStep": 4 }
        ]
      },
      {
        "stepNumber": 4,
        "description": "You notice unusual network activity in your system.",
        "choices": [
          { "decision": "Ignore it", "outcome": "Hackers may be exfiltrating data.", "isCorrect": false, "nextStep": 5 },
          { "decision": "Alert IT immediately", "outcome": "IT prevents data exfiltration.", "isCorrect": true, "nextStep": 5 }
        ]
      },
      {
        "stepNumber": 5,
        "description": "You are asked to review sensitive data from a shared folder.",
        "choices": [
          { "decision": "Access the shared folder", "outcome": "You expose confidential data to unauthorized individuals.", "isCorrect": false, "nextStep": 6 },
          { "decision": "Verify permissions before accessing", "outcome": "You confirm access is authorized and secure.", "isCorrect": true, "nextStep": 6 }
        ]
      },
      {
        "stepNumber": 6,
        "description": "You receive a request for a list of client names.",
        "choices": [
          { "decision": "Provide the list", "outcome": "You disclose confidential client data.", "isCorrect": false, "nextStep": 7 },
          { "decision": "Report the request to your supervisor", "outcome": "Request is investigated and deemed suspicious.", "isCorrect": true, "nextStep": 7 }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A competitor invites you to meet for 'coffee'.",
        "choices": [
          { "decision": "Agree to meet", "outcome": "You risk revealing sensitive company info in a casual setting.", "isCorrect": false, "nextStep": 8 },
          { "decision": "Politely decline", "outcome": "No sensitive information is shared.", "isCorrect": true, "nextStep": 8 }
        ]
      },
      {
        "stepNumber": 8,
        "description": "An anonymous social media account mentions your company's confidential information.",
        "choices": [
          { "decision": "Ignore the post", "outcome": "The leak may continue unnoticed.", "isCorrect": false, "nextStep": 9 },
          { "decision": "Report the post", "outcome": "The leak is investigated and stopped.", "isCorrect": true, "nextStep": 9 }
        ]
      },
      {
        "stepNumber": 9,
        "description": "Your system detects a suspicious user login from an unfamiliar IP.",
        "choices": [
          { "decision": "Ignore the alert", "outcome": "Unauthorized access occurs.", "isCorrect": false, "nextStep": 10 },
          { "decision": "Lock the account and investigate", "outcome": "Access is blocked and the threat is neutralized.", "isCorrect": true, "nextStep": 10 }
        ]
      },
      {
        "stepNumber": 10,
        "description": "You receive a suspicious call requesting business information.",
        "choices": [
          { "decision": "Share the information", "outcome": "Sensitive data is leaked.", "isCorrect": false },
          { "decision": "Verify the caller and report the incident", "outcome": "Attempted corporate espionage is thwarted.", "isCorrect": true }
        ]
      }
    ]
  },
  {
    "name": "Man-in-the-Middle Attack Simulation",
    "description": "A simulation where attackers intercept communication between two parties to steal sensitive information.",
    "impact": "Exposure of sensitive data, potential financial loss.",
    "preventiveMeasures": "Use encryption, ensure HTTPS connections, avoid public Wi-Fi for sensitive transactions.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You connect to an unsecured public Wi-Fi network.",
        "choices": [
          { "decision": "Use the network to access work email", "outcome": "A hacker intercepts your email login credentials.", "isCorrect": false, "nextStep": 2 },
          { "decision": "Avoid logging into work email on public Wi-Fi", "outcome": "Your credentials are secure.", "isCorrect": true, "nextStep": 2 }
        ]
      },
      {
        "stepNumber": 2,
        "description": "You use a secure VPN before connecting to the network.",
        "choices": [
          { "decision": "Proceed with VPN connection", "outcome": "Your data is encrypted and secure.", "isCorrect": true, "nextStep": 3 },
          { "decision": "Connect without VPN", "outcome": "The connection remains unencrypted and vulnerable.", "isCorrect": false, "nextStep": 3 }
        ]
      },
      {
        "stepNumber": 3,
        "description": "You receive a message from a colleague requesting sensitive information.",
        "choices": [
          { "decision": "Send the information immediately", "outcome": "The request was intercepted by a hacker.", "isCorrect": false, "nextStep": 4 },
          { "decision": "Verify the request through another channel", "outcome": "The request was legitimate, and you securely sent the info.", "isCorrect": true, "nextStep": 4 }
        ]
      },
      {
        "stepNumber": 4,
        "description": "A pop-up prompts you to install a browser plugin to 'improve browsing experience'.",
        "choices": [
          { "decision": "Install the plugin", "outcome": "The plugin steals personal data.", "isCorrect": false, "nextStep": 5 },
          { "decision": "Ignore the pop-up", "outcome": "You avoid installing malicious software.", "isCorrect": true, "nextStep": 5 }
        ]
      },
      {
        "stepNumber": 5,
        "description": "You are redirected to a suspicious website after clicking on a link.",
        "choices": [
          { "decision": "Enter personal details on the website", "outcome": "Your information is stolen.", "isCorrect": false, "nextStep": 6 },
          { "decision": "Exit the website immediately", "outcome": "You avoid a phishing attempt.", "isCorrect": true, "nextStep": 6 }
        ]
      },
      {
        "stepNumber": 6,
        "description": "You notice unusual network traffic from your machine.",
        "choices": [
          { "decision": "Ignore the traffic", "outcome": "Sensitive data is being exfiltrated.", "isCorrect": false, "nextStep": 7 },
          { "decision": "Disconnect from the network and notify IT", "outcome": "The threat is neutralized.", "isCorrect": true, "nextStep": 7 }
        ]
      },
      {
        "stepNumber": 7,
        "description": "You see a certificate warning when connecting to your bank’s website.",
        "choices": [
          { "decision": "Proceed to the website", "outcome": "You are redirected to a phishing site.", "isCorrect": false, "nextStep": 8 },
          { "decision": "Verify the certificate and proceed with caution", "outcome": "You access the secure bank site.", "isCorrect": true, "nextStep": 8 }
        ]
      },
      {
        "stepNumber": 8,
        "description": "Your browser is redirected to a login page, but the URL is slightly different from usual.",
        "choices": [
          { "decision": "Enter login details", "outcome": "Your credentials are intercepted.", "isCorrect": false, "nextStep": 9 },
          { "decision": "Check the URL and exit immediately", "outcome": "You avoid entering credentials on a phishing site.", "isCorrect": true, "nextStep": 9 }
        ]
      },
      {
        "stepNumber": 9,
        "description": "Your email account shows signs of unauthorized access.",
        "choices": [
          { "decision": "Change the password immediately", "outcome": "You secure your account.", "isCorrect": true, "nextStep": 10 },
          { "decision": "Ignore the signs", "outcome": "Your account remains vulnerable.", "isCorrect": false, "nextStep": 10 }
        ]
      },
      {
        "stepNumber": 10,
        "description": "You receive a confirmation email for a transaction you did not initiate.",
        "choices": [
          { "decision": "Ignore the email", "outcome": "The hacker completes the fraudulent transaction.", "isCorrect": false },
          { "decision": "Contact the bank immediately", "outcome": "The transaction is halted and secured.", "isCorrect": true }
        ]
      }
    ]
  },
  {
    "name": "Phishing Attack with Social Engineering",
    "description": "A scenario where attackers use social engineering tactics to obtain confidential information.",
    "impact": "Leak of personal or company sensitive data.",
    "preventiveMeasures": "Verify all requests for sensitive information, educate employees about social engineering tactics.",
    "steps": [
      {
        "stepNumber": 1,
        "description": "You receive an email claiming to be from HR, asking for your personal information.",
        "choices": [
          { "decision": "Reply with the requested info", "outcome": "Your personal information is stolen.", "isCorrect": false, "nextStep": 2 },
          { "decision": "Report the email as suspicious", "outcome": "You prevent a potential phishing attack.", "isCorrect": true, "nextStep": 2 }
        ]
      },
      {
        "stepNumber": 2,
        "description": "The same email sender contacts you via phone, pretending to be from IT support.",
        "choices": [
          { "decision": "Provide the requested access credentials", "outcome": "The attacker gains access to sensitive company data.", "isCorrect": false, "nextStep": 3 },
          { "decision": "Hang up and verify the request", "outcome": "You avoid falling for the social engineering attempt.", "isCorrect": true, "nextStep": 3 }
        ]
      },
      {
        "stepNumber": 3,
        "description": "You receive a text message with a link to update your security details.",
        "choices": [
          { "decision": "Click on the link and enter your details", "outcome": "Your information is stolen by a phishing site.", "isCorrect": false, "nextStep": 4 },
          { "decision": "Ignore the message and report it", "outcome": "You prevent a phishing attack.", "isCorrect": true, "nextStep": 4 }
        ]
      },
      {
        "stepNumber": 4,
        "description": "A coworker sends you a link for a shared file, claiming it’s urgent.",
        "choices": [
          { "decision": "Open the link", "outcome": "The link is malicious and infects your system with malware.", "isCorrect": false, "nextStep": 5 },
          { "decision": "Verify with your coworker before clicking", "outcome": "The link is confirmed as phishing.", "isCorrect": true, "nextStep": 5 }
        ]
      },
      {
        "stepNumber": 5,
        "description": "You get an email with a 'customer support' survey asking for personal details.",
        "choices": [
          { "decision": "Complete the survey", "outcome": "Your details are compromised.", "isCorrect": false, "nextStep": 6 },
          { "decision": "Report the survey as suspicious", "outcome": "Survey is flagged as phishing.", "isCorrect": true, "nextStep": 6 }
        ]
      },
      {
        "stepNumber": 6,
        "description": "You’re asked to click a link to reset your password for a website.",
        "choices": [
          { "decision": "Click the link", "outcome": "The link leads to a phishing page.", "isCorrect": false, "nextStep": 7 },
          { "decision": "Check the URL and use official website", "outcome": "You avoid the phishing attempt.", "isCorrect": true, "nextStep": 7 }
        ]
      },
      {
        "stepNumber": 7,
        "description": "A phone call pretends to be a security alert from your bank asking for account verification.",
        "choices": [
          { "decision": "Share account information", "outcome": "Bank account details are stolen.", "isCorrect": false, "nextStep": 8 },
          { "decision": "Hang up and call the bank directly", "outcome": "You prevent identity theft.", "isCorrect": true, "nextStep": 8 }
        ]
      },
      {
        "stepNumber": 8,
        "description": "A recruiter contacts you for a job offer, asking for personal details.",
        "choices": [
          { "decision": "Provide personal details", "outcome": "Your details are compromised.", "isCorrect": false, "nextStep": 9 },
          { "decision": "Verify the recruiter’s authenticity", "outcome": "Recruiter turns out to be legitimate.", "isCorrect": true, "nextStep": 9 }
        ]
      },
      {
        "stepNumber": 9,
        "description": "You receive an urgent email asking you to wire money to an account.",
        "choices": [
          { "decision": "Wire the money", "outcome": "Funds are transferred to a fraudulent account.", "isCorrect": false, "nextStep": 10 },
          { "decision": "Confirm the request through alternate communication", "outcome": "The request was fake and you avoid the fraud.", "isCorrect": true, "nextStep": 10 }
        ]
      },
      {
        "stepNumber": 10,
        "description": "A hacker impersonates a colleague and asks for help with sensitive information.",
        "choices": [
          { "decision": "Provide help with the information", "outcome": "Sensitive data is exposed.", "isCorrect": false },
          { "decision": "Verify with your colleague directly", "outcome": "You avoid the social engineering attack.", "isCorrect": true }
        ]
      }
    ]
  },
]
module.exports = { data: sampleData };