import { Camera, Sparkles, Calendar, Users, Leaf } from "lucide-react";
import logo from "./assets/fooditlogo2.png";
import phone from "./assets/phoneimage3.png";
import { motion } from "framer-motion";

export default function FoodItLandingPage() {
  const features = [
    {
      title: "Scan groceries instantly",
      text: "Use camera or barcode scan to add products in seconds and start tracking expiry dates automatically.",
      icon: <Camera size={20} />,
    },
    {
      title: "Personalized meal ideas",
      text: "Get recipes based on expiring ingredients, cooking time, budget, and your personal food goals.",
      icon: <Sparkles size={20} />,
    },
    {
      title: "Smart weekly planning",
      text: "Plan meals before shopping so you buy with intention and avoid over-purchasing.",
      icon: <Calendar size={20} />,
    },
    {
      title: "Built for shared living",
      text: "Perfect for students and roommates who need more clarity around what is in the fridge and who will use it.",
      icon: <Users size={20} />,
    },
  ];

  const insights = [
    { value: "1.05B", label: "tonnes of food wasted globally each year" },
    { value: "60%", label: "of food waste happens in households" },
    { value: "132kg", label: "per person per year in the EU" },
  ];

  const steps = [
    "Scan or add your groceries the moment you get home.",
    "FoodIt organizes products by urgency and detects what should be used first.",
    "The app suggests personalized meals based on your goals and available ingredients.",
    "You waste less, spend less, and stop asking what to cook every day.",
  ];

  const painPoints = [
    "Duplicate groceries in shared apartments",
    "Irregular schedules that lead to spoilage",
    "Decision fatigue after class or work",
    "Bulk buying that becomes overbuying",
  ];

  return (
    <div className="min-h-screen bg-[#edf2ea] text-[#173f2d]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#d7ef9c]/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[#cfe4d3]/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#e9d7b8]/30 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-[#d7dfd2] bg-[#edf2ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-0">
            {/* Leaf icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d6b43] to-[#88cf38] shadow-md flex-shrink-0">
              <Leaf size={22} color="white" strokeWidth={2} />
            </div>
            {/* Logo + subtitle */}
            <div className="flex flex-col justify-center">
              {/* Logo image */}
              <img
                src={logo}
                alt="FoodIt"
                className="h-12 w-auto object-contain scale-350 origin-left translate-y-[10px] -ml-3"
              />
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#486555] md:flex">
            <a href="#features" className="transition hover:text-[#7cb53c]">Features</a>
            <a href="#experience" className="transition hover:text-[#7cb53c]">Experience</a>
            <a href="#research" className="transition hover:text-[#7cb53c]">Research</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-[#173f2d] px-4 py-2 text-sm font-semibold transition hover:bg-[#173f2d] hover:text-white">
              Log in
            </button>
            <button className="rounded-full bg-[#173f2d] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#21563d]">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[1.05fr,0.95fr] lg:px-10 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d3dfcd] bg-white/90 px-4 py-2 text-sm font-semibold text-[#517161] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8fd13e]" />
              Designed for students and shared kitchens
            </div>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-[#173f2d] sm:text-6xl lg:text-[4.5rem]">
              A smarter way to manage food,
              <span className="block text-[#7dbd39]">before it goes to waste.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#627b6d]">
              FoodIt helps students and busy households scan groceries, track expiry dates, and get meal suggestions that match real routines, personal goals, and the ingredients they already have.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#173f2d] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#173f2d]/15 transition hover:bg-[#21563d]">
                Start with FoodIt
              </button>
              <button className="rounded-full border border-[#c9d7c5] bg-white px-6 py-3 text-base font-semibold text-[#214b37] shadow-sm transition hover:border-[#173f2d]">
                Explore the app
              </button>
            </div>
            <div className="relative">
              {/* Glow */}
              <div className="absolute top-[-575px] right-0 w-[400px] h-[400px] bg-[#d7ef9c] opacity-40 blur-3xl rounded-full" />
              {/* PHONE */}
              <img
                src={phone}
                alt="FoodIt app"
                className="absolute top-[-575px] right-[15px] w-[380px] rotate-[-6deg] drop-shadow-2xl z-20"
              />
            </div>

            <div id="research" className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {insights.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="rounded-[1.75rem] bg-white/95 p-5 shadow-sm ring-1 ring-[#dde6d9]"
                >
                  <div className="text-3xl font-black tracking-tight text-[#173f2d]">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-[#6d8377]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-3xl"
          >
            <div className="absolute -left-8 top-10 h-52 w-52 rounded-full bg-[#d7ef9c]/50 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-52 w-52 rounded-full bg-[#c9e4ce]/70 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/75 p-4 shadow-2xl shadow-[#173f2d]/10 backdrop-blur">
              <div className="mb-4 flex items-center justify-between rounded-[2rem] bg-[#f8faf5] px-5 py-4 ring-1 ring-[#e5ece2]">
                <div>
                  <p className="text-sm font-semibold text-[#75897d]">Today's kitchen snapshot</p>
                  <h3 className="mt-1 text-xl font-bold text-[#173f2d]">What should I cook today?</h3>
                </div>
                <div className="rounded-full bg-[#173f2d] px-4 py-2 text-sm font-semibold text-white">Live demo</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.75fr,1fr,0.75fr]">
                <div className="rounded-[2rem] bg-[#f8faf5] p-3 ring-1 ring-[#e5ece2]">
                  <div className="mb-3 text-center text-xl font-black tracking-tight">
                    <span className="text-[#16603d]">Food</span><span className="text-[#8fd13e]">it</span>
                  </div>
                  <div className="rounded-[1.5rem] bg-white p-3 shadow-sm">
                    <p className="text-sm font-semibold text-[#173f2d]">Expiring soon</p>
                    <div className="mt-3 space-y-2">
                      {[
                        ["Spinach", "Today", "🥬"],
                        ["Mushrooms", "1 day", "🍄"],
                        ["Milk", "2 days", "🥛"],
                      ].map(([name, time, emoji]) => (
                        <div key={name} className="flex items-center justify-between rounded-2xl bg-[#f8faf5] px-3 py-2.5">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{emoji}</span>
                            <div>
                              <p className="text-sm font-semibold text-[#173f2d]">{name}</p>
                              <p className="text-xs text-[#7b9084]">Use soon</p>
                            </div>
                          </div>
                          <span className="rounded-full bg-[#eef5e7] px-2.5 py-1 text-xs font-semibold text-[#588346]">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div id="experience" className="z-10 rounded-[2.25rem] bg-[#173f2d] p-3 shadow-2xl shadow-[#173f2d]/20">
                  <div className="rounded-[1.8rem] bg-[#fcfdf9] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-black tracking-tight">
                          <span className="text-[#16603d]">Food</span><span className="text-[#8fd13e]">it</span>
                        </div>
                        <p className="text-sm text-[#789083]">Hi Alex, here's your best option</p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#214d36] text-3xl text-white">+</div>
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] bg-[#eef5e8] shadow-sm">
                      <div className="h-40 bg-[linear-gradient(135deg,#cadfb1,#8bbc62)] p-5">
                        <div className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[#40614f]">
                          Uses 3 expiring ingredients
                        </div>
                        <div className="mt-10 max-w-[12rem] rounded-2xl bg-white/85 p-3 backdrop-blur">
                          <p className="text-lg font-bold text-[#173f2d]">Creamy spinach pasta</p>
                          <p className="mt-1 text-sm text-[#60776b]">High-protein • 20 min • Budget-friendly</p>
                        </div>
                      </div>
                      <div className="space-y-3 p-4">
                        <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[#5d7769]">
                          <div className="rounded-2xl bg-white px-2 py-3">20 min</div>
                          <div className="rounded-2xl bg-white px-2 py-3">540 cal</div>
                          <div className="rounded-2xl bg-white px-2 py-3">€4.20</div>
                        </div>
                        <button className="w-full rounded-2xl bg-[#214d36] px-4 py-3 text-sm font-semibold text-white">
                          Plan this meal
                        </button>
                        <div className="rounded-2xl bg-white p-3 text-sm text-[#5d7769]">
                          Suggested because your spinach expires today and mushrooms expire tomorrow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-[#f8faf5] p-3 ring-1 ring-[#e5ece2]">
                  <div className="mb-3 text-center text-xl font-black tracking-tight">
                    <span className="text-[#16603d]">Food</span><span className="text-[#8fd13e]">it</span>
                  </div>
                  <div className="rounded-[1.5rem] bg-white p-3 shadow-sm">
                    <p className="text-sm font-semibold text-[#173f2d]">Weekly plan</p>
                    <div className="mt-3 space-y-2 text-sm text-[#5d7769]">
                      <div className="rounded-2xl bg-[#f8faf5] p-3">
                        <p className="font-semibold text-[#173f2d]">Mon</p>
                        <p>Spinach pasta</p>
                      </div>
                      <div className="rounded-2xl bg-[#f8faf5] p-3">
                        <p className="font-semibold text-[#173f2d]">Tue</p>
                        <p>Egg fried rice</p>
                      </div>
                      <div className="rounded-2xl bg-[#f8faf5] p-3">
                        <p className="font-semibold text-[#173f2d]">Wed</p>
                        <p>Mushroom toast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="features"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12"
        >
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7cab59]">Niche by design</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#173f2d]">Made for the way students actually live.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#657d70]">
              FoodIt is not just another pantry tracker. It is a decision-making tool built for shared apartments, unpredictable schedules, and the everyday question of what to cook.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-[2rem] bg-white/95 p-6 shadow-sm ring-1 ring-[#dde6d9] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5dc] text-xl font-bold text-[#5f9238]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#173f2d]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#687f73]">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-6 py-14 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr,0.95fr]">
            <div className="rounded-[2.5rem] bg-white/95 p-8 shadow-sm ring-1 ring-[#dde6d9]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7cab59]">Behavioral insight</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#173f2d]">Why food gets wasted.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-[1.75rem] bg-[#f8faf5] p-5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#173f2d] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-[#4f675b]">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#173f2d] p-8 text-white shadow-xl shadow-[#173f2d]/15">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#cde8ae]">How FoodIt responds</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Small actions, smarter routines.</h2>
              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex gap-4 rounded-[1.5rem] bg-white/10 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8fd13e] font-black text-[#173f2d]">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-7 text-white/90">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24"
        >
          <div className="grid gap-8 rounded-[2.75rem] bg-gradient-to-r from-[#dff0b6] to-[#edf6df] p-8 lg:grid-cols-[1.05fr,0.95fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5d8536]">Value proposition</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#173f2d]">More than reminders. FoodIt helps people decide.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4d6959]">
                Most existing solutions are reactive. FoodIt combines tracking, planning, and personalized meal suggestions to prevent waste before it happens.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[2rem] bg-white/90 p-6 shadow-sm ring-1 ring-[#d8e3d2]"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#173f2d] text-white">✓</div>
                <div>
                  <h3 className="text-lg font-bold text-[#173f2d]">What users gain</h3>
                  <p className="text-sm text-[#70867a]">Clear benefits for daily life</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Less food forgotten in the fridge",
                  "Faster decisions around what to cook",
                  "Lower grocery waste and lower spending",
                  "Meals aligned with goals like healthy, quick, or high-protein",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="rounded-2xl bg-[#f8faf5] px-4 py-3 text-sm font-medium text-[#2c4d3c]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}