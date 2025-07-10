const projects = [
  {
    title: "Vulnerability Assessment Lab (Metasploitable2)",
    tech: "Kali Linux, Nmap, Metasploit, Burp Suite, SQLmap",
    date: "July 2025",
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
    bullets: [
      "Developed a console-based cafe system with role-specific dashboards (Admin, Employee, Student).",
      "Implemented order handling, billing, inventory, and complaints using file I/O.",
      "Organized code with multiple files and enhanced CLI UX via color-coded output.",
    ],
  },
];

export default projects;
