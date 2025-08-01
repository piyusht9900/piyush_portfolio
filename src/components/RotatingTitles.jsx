function RotatingTitles() {
  const titles = [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Enthusiast",
    "UI Designer",
    "Tech Explorer"
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setVisible(true);
      }, 500); // fade out/in timing
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-xl text-gray-400 mb-6 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {titles[index]}
    </p>
  );
}
