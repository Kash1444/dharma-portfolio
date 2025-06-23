import { useTypewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [text] = useTypewriter({
    words: ['Aspiring ML Engineer', 'Python Developer', 'Tech Explorer'],
    loop: true,
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-900 to-black text-white">
      <img
        src="https://avatars.githubusercontent.com/u/128490158?v=4"
        alt="Dharmaprakash"
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white mb-4"
      />

      <h1 className="text-4xl font-bold mb-2">Hi, I'm Dharmaprakash 👋</h1>
      <h2 className="text-xl text-gray-300 mb-6">{text}</h2>

      <p className="text-center max-w-xl text-gray-400 mb-8">
        I'm a passionate Computer Science student focused on AI and Python development. I love solving real-world
        problems and recently built an animal threat detection system using ML, Arduino, and sensors. I'm constantly
        learning and building!
      </p>

      <div className="flex gap-4 mb-10">
        <a href="https://github.com/Kash1444" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/prakashcodes/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:dharmaprakash144@gmail.com">
          <FaEnvelope size={28} />
        </a>
      </div>

      <section className="bg-gray-800 p-6 rounded-xl max-w-2xl w-full shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">🚀 Featured Project</h3>
        <div>
          <h4 className="text-xl font-bold">WILDTRACK – Mitigating Mechanism for Human-Wildlife Conflict</h4>
          <p className="text-gray-300 mt-2">
            Our project focused on sustainable development. Leveraging ML and using Arduino, thermal sensor, ultrasonic
            sensor, Wi-Fi module, and motor system, we aimed to detect animal threats effectively. The project showcased
            our skills in ML and IoT, emphasizing sustainability in tech.
          </p>
        </div>
      </section>

      <section className="mt-10 text-center max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4">🛠 Skills</h3>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
          {[
            'Python',
            'Git & GitHub',
            'Digital Marketing',
            'Data Science',
            'C',
            'Java',
            'UI/UX',
            'SQL',
            'MongoDB',
            'MySQL',
            'Figma',
            'AI/ML',
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full border border-gray-600 shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
