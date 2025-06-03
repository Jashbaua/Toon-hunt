<body>

  <h1>Toon-hunt</h1>
  <p>
    <strong>Toon-hunt</strong> is a “Where’s Waldo?”‐style photo‐tagging application built with Node.js, Express, and vanilla JavaScript for the frontend. Users click on a busy image to locate hidden characters (e.g., Waldo, The Wizard, Wilma, etc.). When a character is found, a marker is placed, and the user’s time is recorded. At the end of the round, they can submit their name to a high‐scores leaderboard.
  </p>

  
  <h2>Live Demo</h2>
  <p>
    <img width="600" alt="toon-hunt" src="https://github.com/user-attachments/assets/3aaebe3f-3e79-4518-9c99-e128b5aeef5e" /></br>
    You can see a deployed version of this project here: 
    <a href="https://toon-hunt.pages.dev/" target="_blank">Toon Hunt Game</a>
  </p>

  <h2>Features</h2>
  <ul>
    <li>Responsive image‐click detection with normalized coordinates across different screen sizes.</li>
    <li>Targeting box and dropdown menu appear when you click the image.</li>
    <li>Backend validation of clicked coordinates against stored character positions.</li>
    <li>Visual markers placed on the image when a correct character is identified.</li>
    <li>Timer starts when the page first loads and stops once all characters are found.</li>
    <li>High‐scores form to submit your name and time if you place on the leaderboard.</li>
    <li>Persistent storage of character coordinates and high‐score entries via MongoDB</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Frontend:</strong> HTML5, CSS3, vanilla JavaScript</li>
    <li><strong>Database:</strong> MongoDB (Mongoose ODM)</li>
    <li><strong>Deployment:</strong> Cloudflare</li>
  </ul>

  <h2>Installation &amp; Setup</h2>
  <p>Follow these steps to run the project locally:</p>
  <ol>
    <li>
      <strong>Clone the repository:</strong>
      <pre><code>git clone https://github.com/&lt;Jashbaua&gt;/Toon-hunt.git</code></pre>
    </li>
    <li>
      <strong>Install dependencies:</strong>
      <pre><code>cd Toon-hunt
npm install</code></pre>
    </li>
    <li>
      <strong>Configure environment variables:</strong>
      <p>Create a <code>.env</code> file in the root directory with the following variables (example):</p>
      <pre><code>MONGO_URI=&lt;your-mongodb-connection-string&gt;
PORT=3000</code></pre>
    </li>
    <li>
      <strong>Seed character coordinates (optional):</strong>
      <p>If you have a seeding script for character positions, run:</p>
      <pre><code>npm run seed</code></pre>
    </li>
    <li>
      <strong>Start the server:</strong>
      <pre><code>npm start</code></pre>
    </li>
    <li>
      <strong>Visit in browser:</strong>
      <p>Open <code>http://localhost:3000</code> to play.</p>
    </li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Load the landing page to see the “Where’s Waldo?”‐style image.</li>
    <li>Click anywhere on the image to open a targeting box with a dropdown of character names.</li>
    <li>Select the character you think is at that location.</li>
    <li>
      If you’re correct, a marker will appear. If not, you’ll receive an error message and can try again.
    </li>
    <li>Repeat until all characters have been found.</li>
    <li>
      Once finished, enter your name in the high‐scores popup to save your time.
    </li>
    <li>Check the leaderboard to compare your time against other players.</li>
  </ol>

  <h2>Notes &amp; Tips</h2>
  <ul>
    <li>
      Coordinates are stored in pixel‐position form (e.g., <code>{ x: 250, y: 400 }</code>) relative to the original image size. On click, these are normalized against the rendered image’s width/height to handle responsive layouts.
    </li>
    <li>
      The timer is started on the server side when the user first loads the “play” route and stopped when all characters are validated. This prevents users from manipulating the frontend timer.
    </li>
    <li>
      Feel free to swap out the default image for your own; just update the <code>public/images/</code> folder and seed new character coordinates in your database.
    </li>
  </ul>
</body>
