const projects = [
   {
    title: "End-to-End SOC Automation",
    tech: "Wazuh, TheHive, Cortex, Docker, MISP",
    date: "Oct 2025 – Nov 2025",
    github: "https://github.com/AbdulRaafaay/Automated-SOC-Using-Wazuh-TheHive-Cortex",
    bullets: [
      "Engineered a unified, open-source SOAR architecture (Wazuh, TheHive, Cortex, MISP) to automate the detection → alert → enrichment → case creation workflow.",
      "Reduced the incident response workflow time from an estimated 5-10 minutes (manual investigation) to under 10 seconds (automated), validating the system with a simulated SSH brute-force attack (using Hydra).",
      "Deployed Python logic with Wazuh to bridge the detection gap and automatically trigger cases in TheHive, enabling intelligence-driven operations.",
      "Implemented a powerful IOC enrichment workflow by configuring Cortex to query local MISP threat intelligence and external APIs (VirusTotal, AbuseIPDB), successfully tagging the attacker IP as 'suspicious'.",
    ],
  },
   {
    title: "Machine Learning for Database Intrusion Detection",
    tech: "Python, MySQL, Scikit-learn, NumPy, Pandas",
    date: "Oct 2025 – Nov 2025",
    github: "https://github.com/AbdulRaafaay/ml-database-intrusion-detection",
    bullets: [
      "Implemented a full intrusion detection pipeline using the **n-quiplet SQL fingerprinting method** and **TSASM (Tabu Search + K-Means) clustering** to discover implicit user roles from unlabeled query data.",
      "Generated and processed a synthetic **2,000-query dataset** across 9 roles, converting SQL logs into 9-feature numerical vectors for unsupervised learning.",
      "**Achieved an Intrusion Detection Rate (Recall) of 91.90%** with 75.45% overall accuracy, confirming the model's effectiveness against anomalous queries.",
      "Identified critical model weaknesses (e.g., cluster collisions causing 41% False Positive rates) and proposed improvements, including **semi-supervised role anchoring** and context-sequence analysis.",
    ],
  },
  {
    title: "HoneyShield: Virtual Honeypot Lab",
    tech: "pfSense, Snort, OpenCanary, VirtualBox, Kali Linux",
    date: "Aug 2025",
    github: "https://github.com/AbdulRaafaay/HoneyShield-Virtual-Honeypot",
    bullets: [
      "Designed and deployed a layered honeynet with pfSense as a firewall/IDS gateway, Ubuntu Server hosting OpenCanary honeypots, and Snort for real-time intrusion detection.",
      "Simulated attacker activity from Kali Linux including Nmap reconnaissance, SSH brute-force with Hydra, and HTTP probing.",
      "Captured and correlated OpenCanary logs with Snort alerts to analyze attacker behavior and validate detection mechanisms.",
      "Ensured complete isolation of the honeynet with pfSense routing enforcement, enabling safe forensic analysis without risking production systems.",
    ],
  },
  {
    title: "Vulnerability Assessment Lab (Kioptrix)",
    tech: "Kali Linux, Nmap, Nikto, Metasploit",
    date: "Aug 2025",
    github: "https://github.com/AbdulRaafaay/Kioprix-Pentesting-Report",
    bullets: [
      "Performed full penetration testing on the Kioptrix vulnerable machine, including network discovery, service enumeration, and vulnerability research.",
      "Exploited Apache mod\_ssl 2.8.4 via the updated OpenFuck exploit to gain a remote shell.",
      "Leveraged Samba 2.2.1a trans2open Metasploit module for direct root access.",
      "Conducted post-exploitation by enumerating system users and confirming full administrative privileges.",
    ],
  },
  {
    title: "M57 Data Exfiltration Investigation",
    tech: "FTK Imager, Outlook PST Viewer",
    date: "July 2025",
    github: "https://github.com/AbdulRaafaay/digital-forensics-m57-breach",
    bullets: [
      "Conducted a full forensic investigation of a data breach using FTK Imager and Outlook PST analysis, tracing a leaked spreadsheet back to a spoofed email attack.",
      "Analyzed file metadata, email headers, and disk images to reconstruct the timeline of exfiltration and identify the attacker’s deception technique.",
      "Authored a 13-page forensic report with recommendations on email authentication (SPF, DKIM), 2FA enforcement, and phishing awareness training.",
    ],
  },
  {
    title: "OWASP Juice Shop (Web App Pentest Lab)",
    tech: "Kali Linux, Nmap, Burp Suite, SQLmap, ffuf, Wireshark",
    date: "July 2025",
    github: "https://github.com/AbdulRaafaay/JuiceShop-Pentest",
    bullets: [
      "Conducted end-to-end security testing on OWASP Juice Shop using industry-standard tools and methodologies.",
      "Discovered critical vulnerabilities including SQL Injection, XSS, broken access control, and sensitive data exposure.",
      "Exploited authentication flaws and privilege escalation via JWT manipulation and session fixation attacks.",
      "Provided detailed security recommendations based on OWASP best practices to strengthen application security posture.",
    ],
  },
  {
    title: "Vulnerability Assessment Lab (Metasploitable2)",
    tech: "Kali Linux, Nmap, Metasploit, Burp Suite, SQLmap",
    date: "July 2025",
    github: "https://github.com/AbdulRaafaay/Vulnerability-Assessment-Metasploitable2",
    bullets: [
      "Performed a comprehensive vulnerability assessment on Metasploitable2 using enumeration, web scanning, and fingerprinting tools.",
      "Gained root access by exploiting vsftpd 2.3.4 via Metasploit.",
      "Used SQLmap to extract credentials through SQL injection in DVWA.",
      "Demonstrated RCE potential by accessing Apache Tomcat Manager with weak credentials and outlining WAR shell deployment.",
    ],
  },
  {
    title: "Enterprise Network Simulation",
    tech: "Cisco Packet Tracer",
    date: "May 2025",
    github: "https://github.com/AbdulRaafaay/Enterprise-Network-Simulation",
    bullets: [
      "Simulated a full enterprise network with multiple subnets using EIGRP, OSPF, RIP, and route redistribution.",
      "Implemented VLSM-based IP addressing and real-world network services including DHCP, NAT, ACLs, FTP, and Email.",
      "Verified connectivity using IOS CLI tools (ping, traceroute, show ip route) with structured troubleshooting.",
    ],
  },
  {
    title: "EliteBank",
    tech: "JavaScript, React.js, Node.js, MongoDB, Express",
    date: "Mar – May 2025",
    github: "https://github.com/AbdulRaafaay/ELiteBank-Web-App",
    bullets: [
      "Built a full-responsive banking web application frontend using React with modular, reusable UI components.",
      "Implemented secure authentication with login, signup, and form validation using Express & MongoDB.",
      "Collaborated in an Agile 3-member team using Trello (tasks) and Figma (UI design) for structured sprint delivery.",
    ],
  },
  {
    title: "SkyNav AI",
    tech: "C++",
    date: "Dec 2024",
    github: "https://github.com/AbdulRaafaay/SkyNav-AI",
    bullets: [
      "Developed a flight routing system using graphs (Adjacency List), Dijkstra’s algorithm, and DFS.",
      "Implemented custom Stack and MinHeap for efficient route calculations.",
      "Enabled dynamic filtering by airline, date, and transit city with file-based flight & hotel data.",
    ],
  },
  {
    title: "Cafe Management System",
    tech: "C++",
    date: "Dec 2023",
    github: "https://github.com/AbdulRaafaay/Cafe-Management-System",
    bullets: [
      "Developed a console-based cafe system with role-specific dashboards (Admin, Employee, Student).",
      "Implemented order handling, billing, inventory, and complaints using file I/O.",
      "Organized code with multiple files and enhanced CLI UX via color-coded output.",
    ],
  },
];

export default projects;