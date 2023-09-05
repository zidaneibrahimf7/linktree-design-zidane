import { TypeAnimation } from "react-type-animation"

export default function App() {

  const user = [
    {
      title: "My GitHub 💻",
      link: "https://github.com/zidaneibrahimf7",
      color: 'bg-red-300'
    },
    {
      title: "My LinkedIn 🚀",
      link: "https://www.linkedin.com/in/zidaneibrahimf/",
      color: 'bg-sky-300'
    },
    {
      title: "My Personal Website ☕️",
      link: "https://www.google.com/",
      color: 'bg-pink-400'
    },
  ]
  return (
    <div className="w-full h-screen bg-banana-yellow flex justify-center items-center font-oldStandart">
      {/* Background */}
      <div className="mx-auto max-w-2xl h-screen flex flex-col gap-3">
        {/* Header Image */}
        <div className="h-48 w-48 mx-auto">
          <img
            src="../public/assets/Zidane.jpeg"
            className="aspect-square rounded-full object-cover object-center"
          />
        </div>
        {/* Header Title */}
        <div className="mx-auto text-center p-3">
          <h1 className="text-4xl font-bold rounded-lg p-2 transition ease-in-out delay-150 bg-orange-0 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300">Zidane Ibrahim Fadela</h1>
          <p className="text-lg font-bold mt-2 rounded-lg transition ease-in-out delay-150 bg-orange-0 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300">I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' Full Stack Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="font-bold text-lg"
              repeat={Infinity}
            />
          </p>
        </div>
        {/* Menus */}
        <div className="flex flex-col gap-5">
          {user.map(({ title, link, color }, index) => {
            return (
              <a href={link} key={index} target="_blank" rel="noreferrer">
                <div className={`${color} w-80 sm:w-96 mx-auto text-center text-xl font-bold py-3 border-2 border-black shadow-customShadow hover:shadow-none transition-all hover-translate-x-1 hover:translate-y-1`}>
                  {title}
                </div>
              </a>
            )
          })}
        </div>
        <footer className="text-center justify-center mx-auto py-2 object-bottom">
          <small >copyright by zidaneibrahimf - 2023</small>
        </footer>
      </div>
    </div>
  )
}