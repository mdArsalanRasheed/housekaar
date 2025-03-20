import React from 'react';
import './Process.css'; // Create this CSS file

const DesignProcess = () => {
  const processSteps = [
    {
      title: 'Start your project',
      description:
        'Getting started is super easy, fast and hassle free. Whether you are looking for a ready to use house plan and design, customized house plan design, 3d house design elevation, full house interior designing or you wish to design just one room, we can help you get it right.',
    },
    {
      title: 'Share your requirements',
      description:
        'Every house is unique and so are the people living in that house. So, discuss and share your vision with our experts. Tell us about your space, must have features, nice to have features, tentative budget, your likes, dislikes etc. Basically, we want to know everything about your needs before we start ideating and create design concepts.',
    },
    {
      title: 'Get the first design',
      description:
        "We're equally excited to show you the stunning designs and concepts. Based on your requirements, layout, budget and priorities, our design experts will start creating personalized designs concepts. While designing concepts, we pay special attention to your requirements, priorities and your budget.",
    },
    {
      title: 'Review and suggest changes',
      description:
        'House designing has to be a personalized experience. You will get to review the design created by our expert designers. You can review and suggest changes in the design as needed. We’ll make those changes, and iterate the process till you are fully satisfied with the outcome.',
    },
    {
      title: 'Get everything delivered',
      description:
        'Once you are satisfied and happy with how the final designs have come up, we will pack up all the deliverables (designs, technical drawings etc) and send it to you.',
    },
  ];

  return (
    <div className="design-process-container">
      <div className="design-process-header">
        <h2>Your House, Designed Your Way</h2>
        <p>That's how simple our house design process is.</p>
        <p>Houseyog designs beautiful space by combining the expertise of real architects and interior designers with the power of modern technologies. Our online architectural and interior designing services are designed to be much more personalized, affordable and hassle-free.</p>
        <p>Our dedicated architects and interior designers collaborate with you to design beautiful home, office, shop or any other property within your specified budget.</p>
        <p>Here's how we design the best homes and spaces that you will be proud to show off.</p>
      </div>

      <div className="design-process-roadmap">
        {processSteps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-details">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < processSteps.length - 1 && <div className="step-connector" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignProcess;