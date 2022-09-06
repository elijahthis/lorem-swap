const Steps = () => {
    const steps = [
        {
            title: "Enter an amount",
            desc: "Enter the amount of crypto you want to withdraw, or its naira equivalent",
        },
        {
            title: "Enter your bank details",
            desc: "Enter the amount of crypto you want to withdraw, or its naira equivalent",
        },
        {
            title: "Send crypto",
            desc: "Enter the amount of crypto you want to withdraw, or its naira equivalent",
        },
        {
            title: "Receive cash",
            desc: "Enter the amount of crypto you want to withdraw, or its naira equivalent",
        },
    ];

    return (
        <div className="Steps">
            <h2>Seamless Withdrawal</h2>

            <div className="stepList">
                {steps.map((step, ind) => (
                    <div key={ind} className="stepItem">
                        <div className="num">{ind + 1}</div>
                        <div>
                            <h4>{step.title}</h4>
                            <p className="desc">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
