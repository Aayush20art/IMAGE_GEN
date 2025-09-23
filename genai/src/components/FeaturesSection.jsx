export default function FeaturesSection() {
    const features = [
        {
            icon: "✳️",
            title: "AI",
            description: "Our AI generates unique, high-quality images from text prompts, saving you time and resources."
        },
        {
            icon: "✴️",
            title: "Edit",
            description: "Refine and customize generated images with our intuitive editor, ensuring perfect results every single time."
        },
        {
            icon: "🟣",
            title: "API",
            description: "Integrate ImageGen's powerful API into your workflow for seamless image creation and automation."
        }
    ];

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center -mt-40 px-6 gap-7">
            <div className="mb-3 -pt-90 text-purple-600 font-bold text-lg text-center">Key Benefits</div>
            <h2 className="text-white text-5xl font-bold text-center mb-2">Features That Matter</h2>
            <p className="text-white/80 text-2xl font-bold text-center mb-16 max-w-3xl">
                ImageGen SaaS offers cutting-edge AI, seamless API integration, and intuitive editing tools for unparalleled image generation capabilities.

                Aaahish fuddu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-full">
                {features.map((f) => (
                    <div key={f.title} className="flex flex-col  items-center text-center  rounded-xl p-8 shadow-lg font-semibold">
                        <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-xl bg-[#181925]">
                            <span className="text-5xl text-purple-600">{f.icon}</span>
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-3">{f.title}</h3>
                        <p className="text-white/80 text-lg">{f.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
