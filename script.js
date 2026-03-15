/* ═══════════════════════════════════════════
   PHILIP AKEKUDAGA — PORTFOLIO INTERACTIONS
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── SECTION NAVIGATION ───
  var sections = [
    { id: 'about',        label: 'About Me',       icon: '#' },
    { id: 'experience',   label: 'Experience',      icon: '>' },
    { id: 'projects',     label: 'Projects',        icon: '/' },
    { id: 'skills',       label: 'Skills & Tools',  icon: '{' },
    { id: 'publications', label: 'Publications',    icon: '&' },
    { id: 'education',    label: 'Education',       icon: '~' },
    { id: 'contact',      label: 'Contact',         icon: '$' },
  ];

  // ─── SEARCHABLE DATA (for smarter command palette) ───
  var searchableItems = [
    // Projects
    { type: 'project', label: 'MCP — Measurement Control Plane', section: 'projects', keywords: 'mcp measurement control plane p4 bandit nsdi' },
    { type: 'project', label: 'Agent-P4 — SDN DNS Threat Defense', section: 'projects', keywords: 'agent p4 sdn dns threat defense pipeline' },
    { type: 'project', label: 'Adaptive Routing with Telemetry', section: 'projects', keywords: 'adaptive routing ecmp telemetry throughput load balancing' },
    { type: 'project', label: 'FAIR Risk Analysis Platform', section: 'projects', keywords: 'fair risk analysis monte carlo quantitative cyber' },
    { type: 'project', label: 'Grid Resilience Simulator', section: 'projects', keywords: 'grid resilience fdna power cyber physical infrastructure' },
    { type: 'project', label: 'Phishing Impact Assessment Tool', section: 'projects', keywords: 'phishing impact assessment risk business' },
    { type: 'project', label: 'Cloud Honeypot Threat Mapping', section: 'projects', keywords: 'honeypot azure sentinel kql brute force' },
    { type: 'project', label: 'Cyber Threat Intelligence Platform', section: 'projects', keywords: 'threat intelligence siem incident response' },
    // Publications
    { type: 'pub', label: 'Systemic Risk in Critical Power Infrastructure (FDNA)', section: 'publications', keywords: 'fdna power grid cascades siracon' },
    { type: 'pub', label: 'Multi-Jurisdictional Privacy Compliance in AI', section: 'publications', keywords: 'privacy compliance ai regulatory gaps ieee uemcon' },
    { type: 'pub', label: 'Cybersecurity Risks in AI-Enabled IoT Systems', section: 'publications', keywords: 'iot ai critical infrastructure ieee uemcon' },
    { type: 'pub', label: 'Financial Markets Impact of Data Breaches', section: 'publications', keywords: 'data breach financial markets machine learning event study asia' },
    { type: 'pub', label: 'Flood Attack Detection using GRU Model', section: 'publications', keywords: 'iot flood attack gru deep learning' },
    { type: 'pub', label: 'Social Media Responses to 2024 Earthquake', section: 'publications', keywords: 'earthquake social media northeast' },
    { type: 'pub', label: 'Network Measurement Control (NSDI)', section: 'publications', keywords: 'nsdi measurement control programmable monitoring' },
    // Skills
    { type: 'skill', label: 'P4 / Intel Tofino / BMv2', section: 'skills', keywords: 'p4 tofino bmv2 programmable dataplane switch asic' },
    { type: 'skill', label: 'Splunk / Microsoft Sentinel', section: 'skills', keywords: 'splunk sentinel siem spl kql security monitoring' },
    { type: 'skill', label: 'Python / Bash / PowerShell', section: 'skills', keywords: 'python bash powershell scripting automation' },
    { type: 'skill', label: 'NIST / ISO 27001 / MITRE ATT&CK', section: 'skills', keywords: 'nist iso mitre attack framework compliance' },
  ];

  var prevSection = null;

  function switchSection(sectionId) {
    // Exit animation on previous section
    var currentActive = document.querySelector('.section.active');
    if (currentActive && currentActive.id !== sectionId) {
      currentActive.classList.remove('active');
      currentActive.classList.add('section-exit');
      setTimeout(function () {
        currentActive.classList.remove('section-exit');
      }, 200);
    }

    setTimeout(function () {
      document.querySelectorAll('.section').forEach(function (el) {
        if (el.id !== sectionId) el.classList.remove('active');
      });
      var target = document.getElementById(sectionId);
      if (target) target.classList.add('active');
    }, currentActive && currentActive.id !== sectionId ? 100 : 0);

    document.querySelectorAll('.nav-item').forEach(function (el) {
      el.classList.toggle('active', el.dataset.section === sectionId);
    });
    document.querySelectorAll('.tab').forEach(function (el) {
      var isActive = el.dataset.section === sectionId;
      el.classList.toggle('active', isActive);
      el.setAttribute('aria-selected', isActive);
    });
    closeMobileSidebar();
    var scroll = document.querySelector('.content-scroll');
    if (scroll) scroll.scrollTop = 0;
    setTimeout(function () { triggerReveals(); }, 150);
    prevSection = sectionId;
  }

  // Sidebar nav clicks
  document.querySelectorAll('.nav-item[data-section]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      switchSection(this.dataset.section);
    });
  });

  // Tab clicks
  document.querySelectorAll('.tab[data-section]').forEach(function (el) {
    el.addEventListener('click', function () {
      switchSection(this.dataset.section);
    });
  });

  // ─── KEYBOARD SHORTCUTS ───
  document.addEventListener('keydown', function (e) {
    // Don't capture shortcuts when typing in terminal or command palette
    if (document.activeElement && (document.activeElement.id === 'termInput' || document.activeElement.id === 'cmdInput')) {
      if (e.key === 'Escape') {
        document.activeElement.blur();
        closeCommandPalette();
      }
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '7') {
      e.preventDefault();
      var idx = parseInt(e.key) - 1;
      if (sections[idx]) switchSection(sections[idx].id);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openCommandPalette();
    }
    if (e.key === 'Escape') {
      closeCommandPalette();
      closeMobileSidebar();
    }
  });

  // ─── COMMAND PALETTE (SMART SEARCH) ───
  var cmdOverlay = document.getElementById('cmdOverlay');
  var cmdInput = document.getElementById('cmdInput');
  var cmdResults = document.getElementById('cmdResults');
  var selectedIdx = 0;

  function openCommandPalette() {
    cmdOverlay.classList.add('open');
    cmdInput.value = '';
    renderResults('');
    selectedIdx = 0;
    updateSelection();
    setTimeout(function () { cmdInput.focus(); }, 50);
  }

  function closeCommandPalette() {
    cmdOverlay.classList.remove('open');
  }

  function renderResults(query) {
    var q = query.toLowerCase().trim();
    var results = [];

    // Always show section nav items
    var filteredSections = sections.filter(function (s) {
      if (!q) return true;
      return s.label.toLowerCase().includes(q) || s.id.toLowerCase().includes(q);
    });
    filteredSections.forEach(function (s) {
      results.push({
        type: 'section',
        icon: s.icon,
        label: s.label,
        detail: '',
        section: s.id,
        shortcut: 'Ctrl+' + (sections.indexOf(s) + 1)
      });
    });

    // If query present, also search projects/pubs/skills
    if (q && q.length >= 2) {
      searchableItems.forEach(function (item) {
        var haystack = (item.label + ' ' + item.keywords).toLowerCase();
        if (haystack.includes(q)) {
          var typeLabel = item.type === 'project' ? 'Project' : item.type === 'pub' ? 'Publication' : 'Skill';
          results.push({
            type: item.type,
            icon: item.type === 'project' ? '/' : item.type === 'pub' ? '&' : '{',
            label: item.label,
            detail: typeLabel,
            section: item.section,
            shortcut: ''
          });
        }
      });
    }

    // Limit results
    results = results.slice(0, 12);

    cmdResults.innerHTML = results.map(function (r, i) {
      return '<div class="cmd-result" data-section="' + r.section + '" data-idx="' + i + '">' +
        '<span class="cmd-result-icon">' + r.icon + '</span>' +
        '<span>' + r.label + '</span>' +
        (r.detail ? '<span class="cmd-result-type">' + r.detail + '</span>' : '') +
        (r.shortcut ? '<span class="cmd-result-shortcut">' + r.shortcut + '</span>' : '') +
        '</div>';
    }).join('');

    cmdResults.querySelectorAll('.cmd-result').forEach(function (el) {
      el.addEventListener('click', function () {
        switchSection(this.dataset.section);
        closeCommandPalette();
      });
      el.addEventListener('mouseenter', function () {
        selectedIdx = parseInt(this.dataset.idx);
        updateSelection();
      });
    });
  }

  function updateSelection() {
    var items = cmdResults.querySelectorAll('.cmd-result');
    items.forEach(function (el, i) {
      el.classList.toggle('selected', i === selectedIdx);
    });
  }

  cmdInput.addEventListener('input', function () {
    renderResults(this.value);
    selectedIdx = 0;
    updateSelection();
  });

  cmdInput.addEventListener('keydown', function (e) {
    var items = cmdResults.querySelectorAll('.cmd-result');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = Math.min(selectedIdx + 1, items.length - 1);
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = Math.max(selectedIdx - 1, 0);
      updateSelection();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[selectedIdx]) {
        switchSection(items[selectedIdx].dataset.section);
        closeCommandPalette();
      }
    }
  });

  cmdOverlay.addEventListener('click', function (e) {
    if (e.target === cmdOverlay) closeCommandPalette();
  });

  // ─── MOBILE SIDEBAR ───
  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebarOverlay');
  var mobileToggle = document.getElementById('mobileToggle');

  function openMobileSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
  }

  function closeMobileSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
  }

  mobileToggle.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeMobileSidebar() : openMobileSidebar();
  });
  sidebarOverlay.addEventListener('click', closeMobileSidebar);

  // ─── MOBILE SEARCH BUTTON ───
  var mobileSearchBtn = document.getElementById('mobileSearch');
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', openCommandPalette);
  }

  // ─── HASH NAVIGATION ───
  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (hash && sections.find(function (s) { return s.id === hash; })) {
      switchSection(hash);
    } else if (hash) {
      window.location.hash = '#about';
      switchSection('about');
    }
  }
  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) handleHash();

  // ─── REVEAL ON SECTION SWITCH ───
  function triggerReveals() {
    document.querySelectorAll('.section.active .reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }
  setTimeout(triggerReveals, 200);

  // ═══════════════════════════════════════════
  // INTERACTIVE TERMINAL
  // ═══════════════════════════════════════════

  var termInput = document.getElementById('termInput');
  var termHistory = document.getElementById('termHistory');
  var termCmdHistory = [];
  var termHistIdx = -1;

  var termCommands = {
    help: function () {
      return [
        'Available commands:',
        '  whoami        — about me',
        '  ls projects   — list projects',
        '  ls pubs       — list publications',
        '  cat skills    — show skills',
        '  cat contact   — contact info',
        '  uptime        — career summary',
        '  date          — current date',
        '  clear         — clear terminal',
        '  echo [text]   — echo text back',
        '  goto [section]— navigate to section',
        '  neofetch      — system info'
      ].join('\n');
    },
    whoami: function () {
      return 'Philip Akekudaga\nPhD Student, Electrical Engineering\nUniversity of Rhode Island — CYPHER Lab\nFocus: Programmable Networks (P4/SDN), ICS/OT Cybersecurity, ML Traffic Classification';
    },
    uptime: function () {
      return '8+ years in production infrastructure. 7 published papers. Still learning.';
    },
    date: function () {
      return new Date().toString();
    },
    neofetch: function () {
      return [
        '  ┌──────────────────────┐',
        '  │  philip@cypher-lab   │',
        '  ├──────────────────────┤',
        '  │ OS:     Ubuntu 22.04 │',
        '  │ Shell:  bash 5.1     │',
        '  │ IDE:    VS Code      │',
        '  │ Lang:   P4, Python   │',
        '  │ Switch: Intel Tofino │',
        '  │ Lab:    CYPHER, URI  │',
        '  │ Uptime: 8+ years    │',
        '  └──────────────────────┘'
      ].join('\n');
    },
    'ls projects': function () {
      return [
        'drwxr-xr-x  mcp/                   — Measurement Control Plane (NSDI)',
        'drwxr-xr-x  agent-p4/              — SDN-Based DNS Threat Defense',
        'drwxr-xr-x  adaptive-routing/      — Real-Time Telemetry Routing',
        'drwxr-xr-x  fair-risk/             — FAIR Risk Analysis Platform',
        'drwxr-xr-x  grid-resilience/       — Grid Resilience Simulator',
        'drwxr-xr-x  phishing-impact/       — Phishing Impact Assessment',
        'drwxr-xr-x  cloud-honeypot/        — Cloud Honeypot Threat Mapping',
        'drwxr-xr-x  cyber-threat-intel/    — Cyber Threat Intelligence'
      ].join('\n');
    },
    'ls pubs': function () {
      return [
        '[1] Systemic Risk in Power Infrastructure (SIRAcon \'25)    ✓ Accepted',
        '[2] Multi-Jurisdictional Privacy Compliance (IEEE UEMCON)  ✓ Accepted',
        '[3] Cybersecurity in AI-Enabled IoT (IEEE UEMCON)          ✓ Accepted',
        '[4] Financial Markets Impact of Data Breaches (ASIA \'25)   ✓ Published',
        '[5] Flood Attack Detection using GRU (WJARR)               ✓ Published',
        '[6] Social Media Responses to 2024 Earthquake              → In Press',
        '[7] Network Measurement Control (NSDI Frontiers)           → Under Review'
      ].join('\n');
    },
    'cat skills': function () {
      return [
        'networking:   BGP, OSPF, ECMP, TCP/IP, DNS, VLANs, ACLs',
        'dataplane:    P4_16, BMv2, Intel Tofino (TNA)',
        'sdn:          P4Runtime, Ryu, OpenFlow, Open vSwitch',
        'security:     Splunk, Sentinel, CrowdStrike, Nessus, Nmap',
        'scripting:    Python, Bash, PowerShell, JavaScript, SQL',
        'frameworks:   NIST CSF, ISO 27001, FAIR, MITRE ATT&CK',
        'ml:           scikit-learn, pandas, numpy (traffic classification)',
        'infra:        Docker, Ansible, Git, GitHub Actions, Azure'
      ].join('\n');
    },
    'cat contact': function () {
      return [
        'EMAIL:    akekulip@gmail.com',
        'GITHUB:   github.com/akekulip',
        'LINKEDIN: linkedin.com/in/akekulip',
        'LOCATION: Kingston, Rhode Island',
        'STATUS:   Open to summer 2026 internships (F-1 CPT)'
      ].join('\n');
    },
    pwd: function () {
      return '/home/philip/portfolio';
    },
    hostname: function () {
      return 'cypher-lab.uri.edu';
    }
  };

  if (termInput && termHistory) {
    termInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var cmd = termInput.value.trim();
        if (!cmd) return;

        termCmdHistory.push(cmd);
        termHistIdx = termCmdHistory.length;

        // Show command in history
        var cmdLine = document.createElement('div');
        cmdLine.className = 'terminal-line';
        cmdLine.innerHTML = '<span class="terminal-prompt">philip@cypher-lab:~$ </span><span class="terminal-cmd">' + escapeHtml(cmd) + '</span>';
        termHistory.appendChild(cmdLine);

        // Process command
        var output = '';
        var lowerCmd = cmd.toLowerCase();

        if (lowerCmd === 'clear') {
          termHistory.innerHTML = '';
          termInput.value = '';
          return;
        } else if (lowerCmd.startsWith('goto ')) {
          var target = lowerCmd.replace('goto ', '').trim();
          var match = sections.find(function (s) { return s.id === target || s.label.toLowerCase().includes(target); });
          if (match) {
            output = 'Navigating to ' + match.label + '...';
            setTimeout(function () { switchSection(match.id); }, 400);
          } else {
            output = 'Error: section "' + escapeHtml(target) + '" not found. Try: about, experience, projects, skills, publications, education, contact';
          }
        } else if (lowerCmd.startsWith('echo ')) {
          output = cmd.substring(5);
        } else if (termCommands[lowerCmd]) {
          output = termCommands[lowerCmd]();
        } else if (termCommands[cmd]) {
          output = termCommands[cmd]();
        } else {
          output = 'bash: ' + escapeHtml(cmd) + ': command not found\nType "help" for available commands.';
        }

        if (output) {
          var outputEl = document.createElement('div');
          outputEl.className = 'terminal-output';
          outputEl.style.whiteSpace = 'pre-wrap';
          outputEl.textContent = output;
          termHistory.appendChild(outputEl);
        }

        termInput.value = '';

        // Scroll terminal to bottom
        var termBody = document.getElementById('liveTerminal');
        if (termBody) termBody.scrollTop = termBody.scrollHeight;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (termHistIdx > 0) {
          termHistIdx--;
          termInput.value = termCmdHistory[termHistIdx];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (termHistIdx < termCmdHistory.length - 1) {
          termHistIdx++;
          termInput.value = termCmdHistory[termHistIdx];
        } else {
          termHistIdx = termCmdHistory.length;
          termInput.value = '';
        }
      }
    });

    // Click anywhere in terminal body to focus input
    var liveTerminal = document.getElementById('liveTerminal');
    if (liveTerminal) {
      liveTerminal.addEventListener('click', function (e) {
        if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
          termInput.focus();
        }
      });
    }
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ═══════════════════════════════════════════
  // AMBIENT ANIMATIONS
  // ═══════════════════════════════════════════

  // ─── SIDE FEED GENERATION ───
  var leftFeed = document.getElementById('ambientLeft');
  var rightFeed = document.getElementById('ambientRight');

  var protocols = ['TCP', 'UDP', 'DNS', 'ICMP', 'ARP', 'BGP', 'OSPF'];
  var actions = ['FWD', 'MATCH', 'DROP', 'HIT', 'MISS', 'ACCEPT', 'INSPECT'];
  var tables = ['ipv4_lpm', 'acl_table', 'ecmp_group', 'arp_table', 'mac_table', 'dns_filter'];
  var ports = ['port0', 'port1', 'port2', 'port3'];

  function randItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function randIP() { return '10.0.' + Math.floor(Math.random()*4) + '.' + (Math.floor(Math.random()*254)+1); }
  function randPort() { return Math.floor(Math.random()*60000) + 1024; }
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  function makeTimestamp() {
    var d = new Date();
    return pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
  }

  function generateLeftLines() {
    var lines = [];
    for (var i = 0; i < 120; i++) {
      var t = makeTimestamp();
      var r = Math.random();
      var cls = '';
      var text = '';
      if (r < 0.45) {
        text = t + ' ' + randIP() + ':' + randPort() + ' > ' + randIP() + ':' + randPort() + ' ' + randItem(protocols) + ' len=' + (Math.floor(Math.random()*1400)+64);
      } else if (r < 0.7) {
        text = t + ' TABLE ' + randItem(tables) + ' ' + randItem(actions) + ' nhop=' + randItem(ports);
        cls = 'ambient-line--accent';
      } else if (r < 0.85) {
        var util = Math.floor(Math.random()*85)+5;
        text = t + ' TELEMETRY ' + randItem(ports) + ' util=' + util + '% bytes=' + (Math.floor(Math.random()*9000)+100);
        cls = 'ambient-line--green';
      } else if (r < 0.95) {
        text = t + ' COUNTER pkt_count +' + (Math.floor(Math.random()*50)+1) + ' byte_count +' + (Math.floor(Math.random()*60000)+500);
        cls = 'ambient-line--yellow';
      } else {
        text = t + ' ALERT dns_query NXDOMAIN ' + ['susp','bad','mal','c2'][Math.floor(Math.random()*4)] + '.xyz BLOCKED';
        cls = 'ambient-line--red';
      }
      lines.push('<div class="ambient-line ' + cls + '">' + text + '</div>');
    }
    return lines.join('');
  }

  function generateRightLines() {
    var lines = [];
    var logMsgs = [
      'p4c: compiled defense.p4 (0 errors, 2 warnings)',
      'bmv2: simple_switch started on port 9090',
      'controller: connected to switch s1 via gRPC',
      'ryu: topology discovery complete (6 switches)',
      'mininet: link s1-s3 up (10Mbps, 1ms delay)',
      'p4runtime: table_add ipv4_lpm 10.0.1.0/24 => port1',
      'p4runtime: table_add ecmp_group hash=crc16 ports=[1,2]',
      'iperf3: UDP flow h1->h2 started (5Mbps target)',
      'counter: cms_sketch row0 idx=2847 val=42',
      'watchlist: added 10.0.3.99 (suspicious DNS pattern)',
      'telemetry: epoch 47 complete, 4 objectives evaluated',
      'mcp: shadow_price[sketch]=0.23 [poll]=0.41',
      'snmp: ifInOctets.port2 = 847293',
      'sflow: sample 1/512 from s2:port1',
      'digest: heavy_hitter 10.0.2.77 (3241 pkt/epoch)',
      'scapy: crafted DNS A query for test.local',
      'tofino: stage 3/12 TCAM utilization 67%',
      'git: commit a3f8c2d "fix ecmp hash collision"',
      'pytest: 14 passed, 0 failed (2.3s)',
      'ssh: session opened for philip@cypher-lab',
      'systemd: p4-monitor.service active (running)',
      'cron: /opt/telemetry/collect.sh executed',
      'kernel: net eth0: link up 1000Mbps full-duplex',
      'docker: container bmv2_s1 healthy',
      'ansible: TASK [deploy switch config] ok',
    ];

    for (var i = 0; i < 120; i++) {
      var msg = logMsgs[i % logMsgs.length];
      var cls = '';
      if (msg.includes('ALERT') || msg.includes('error') || msg.includes('BLOCKED')) cls = 'ambient-line--red';
      else if (msg.includes('p4runtime') || msg.includes('bmv2') || msg.includes('tofino')) cls = 'ambient-line--accent';
      else if (msg.includes('passed') || msg.includes('complete') || msg.includes('healthy') || msg.includes('ok') || msg.includes('compiled')) cls = 'ambient-line--green';
      else if (msg.includes('shadow') || msg.includes('warning') || msg.includes('watchlist')) cls = 'ambient-line--yellow';
      lines.push('<div class="ambient-line ' + cls + '">' + makeTimestamp() + ' ' + msg + '</div>');
    }
    return lines.join('');
  }

  if (leftFeed && rightFeed) {
    var leftContent = generateLeftLines();
    leftFeed.innerHTML = leftContent + leftContent;
    var rightContent = generateRightLines();
    rightFeed.innerHTML = rightContent + rightContent;
  }

  // ─── PROCESS STATUS ROTATION ───
  var processEl = document.getElementById('processStatus');
  if (processEl) {
    var processMessages = [
      'monitoring p4_switch_0 — 0 alerts',
      'telemetry epoch 48 — collecting port stats',
      'cms_sketch: 4 active rows, 4096 buckets each',
      'ecmp_group: 3 paths active, load balanced',
      'dns_filter: 1,247 queries inspected, 3 blocked',
      'link_util: port0=34% port1=67% port2=12% port3=45%',
      'watchlist: 2 IPs flagged, 0 escalated',
      'forwarding_table: 128 entries, 0 collisions',
      'p4runtime: gRPC channel healthy (latency: 2ms)',
      'config_validation: all switches compliant',
    ];
    var procIdx = 0;
    setInterval(function () {
      procIdx = (procIdx + 1) % processMessages.length;
      processEl.style.opacity = '0';
      setTimeout(function () {
        processEl.textContent = processMessages[procIdx];
        processEl.style.opacity = '1';
      }, 200);
    }, 4000);
    processEl.style.transition = 'opacity 200ms ease';
  }

  // ─── STATUSBAR LIVE CLOCK ───
  var clockEl = document.getElementById('statusClock');
  if (clockEl) {
    function updateClock() {
      var d = new Date();
      clockEl.textContent = pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // ─── STATUSBAR PACKET COUNTER ───
  var pktEl = document.getElementById('statusPackets');
  if (pktEl) {
    var pktCount = 0;
    setInterval(function () {
      pktCount += Math.floor(Math.random() * 12) + 1;
      pktEl.textContent = 'pkts: ' + pktCount.toLocaleString();
    }, 800);
  }

  // ─── ABOUT TYPING ANIMATION ───
  var typingEl = document.getElementById('aboutTyping');
  if (typingEl) {
    var typingLines = [
      '',
      'PhD student at URI. I make networks smarter by programming the switches themselves.',
      'Currently obsessing over P4 and what happens when you give ASICs opinions',
      'about DNS traffic.',
      '',
      'Advisor: Dr. Hui Lin | CYPHER Lab',
      'Focus: P4/SDN, Intel Tofino, ICS/OT cybersecurity, ML traffic classification'
    ];
    var lineIdx = 0;
    var charIdx = 0;
    var currentHtml = '';
    var typingSpeed = 18;

    function typeNext() {
      if (lineIdx >= typingLines.length) return;
      var line = typingLines[lineIdx];
      if (charIdx <= line.length) {
        var partial = line.substring(0, charIdx);
        typingEl.innerHTML = currentHtml + partial + '<span class="typing-cursor">|</span>';
        charIdx++;
        setTimeout(typeNext, typingSpeed);
      } else {
        currentHtml += line + '<br>';
        lineIdx++;
        charIdx = 0;
        setTimeout(typeNext, line === '' ? 50 : 120);
      }
    }
    setTimeout(typeNext, 400);
  }

  // ─── COPY EMAIL BUTTON ───
  var copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText('akekulip@gmail.com').then(function () {
        copyBtn.textContent = '[copied!]';
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.textContent = '[copy]';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });
  }

  // ═══════════════════════════════════════════
  // NETWORK GRAPH BACKGROUND
  // ═══════════════════════════════════════════

  var canvas = document.getElementById('networkBg');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var nodes = [];
    var numNodes = 60;
    var connectionDist = 200;
    var animFrameId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    for (var i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1.5,
        color: Math.random() > 0.7 ? '#38c172' : '#4da8da'
      });
    }

    function drawNetwork() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            var alpha = (1 - dist / connectionDist) * 0.35;
            ctx.strokeStyle = 'rgba(77, 168, 218, ' + alpha + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and update positions
      for (var k = 0; k < nodes.length; k++) {
        var node = nodes[k];

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      }

      animFrameId = requestAnimationFrame(drawNetwork);
    }

    // Only run if no reduced motion preference
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      drawNetwork();
    }

    // Pause when tab not visible
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animFrameId);
      } else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        drawNetwork();
      }
    });
  }

})();
