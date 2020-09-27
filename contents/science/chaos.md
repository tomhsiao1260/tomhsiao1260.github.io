---
title: "From chaos to order"
description: "I made a special feedback device to drive the double pendulum"
template: chaos-post
img1: ./chaos1.jpg
img2: ./chaos2.jpg
img3: ./chaos3.jpg
img4: ./chaos4.jpg
img5: ./chaos5.jpg

videoSrcURL: "https://www.youtube.com/embed/ERibf1XQnB4"
videoTitle: "Double Pendulum with Unique Driver"

content1: Chaotic system, in brief, means that a system is extremely sensitive to initial conditions. In other words, a small change in the beginning can eventually make a significantly different results. Therefore, in experiment, the further away from the future, the more inaccurate predictions become. I made a double pendulum, a typical chaotic system, and extracted its movement trajectory using image recognition technology. The reconstructive results are shown above. The yellow and white lines correspond to the upper and lower pendulum, respectively. The trajectory at the end of the lower pendulum is recorded by the green curve. It's obvious that system without external driver reveals typically aperiodic and unpredictable chaotic behavior. However, interestingly, in some specific conditions, the pendulum driven by external force can return to periodic and orderly behavior as shown above! The original film is shown below, and the driving mechanism will also be explained in detail.

content2: From the video above, it can be found that a rotating wheel are installed at the joint of the upper and lower pendulums as a driver. The wheel driven by DC motor will give the corresponding rotation direction based on the gravity sensor (G-sensor) installed behind the upper pendulum. It can also be considered as a gravity feedback system. Physically, when the rotation direction changes, the upper pendulum will obtain an extra rotational momentum in the opposite direction (conservation of angular momentum). In engineering, changing the rotation direction at the right time through G-sensor will continue to bring extra kinetic energy to the pendulum system! You can also see some experimental setup and related electronic circuit below.

content3: The figure above shows the front and side views of the double pendulum with driver. The stickers with different color (blue, red, yellow) on the edges of each pendulum are mainly used as feature points for image recognition so that the motion trajectory can be tracked for further analysis. In addition, the circuit behind the upper pendulum is shown above and its function is as follow. First of all, the G-sensor will detect the angle of the upper pendulum in real time and pass the signal to the voltage comparator. Secondly, the comparator controls the DC motor to forward or reverse through the H-bridge circuit. Finally, by altering the rotation direction of the motor, the pendulum will be driven by external force due to conservation of angular momentum. Moreover, the plot of the angles of the upper (x-axis) and lower (y-axis) pendulums over time is shown below. It can be found that the motion is out of phase, and the trajectory is closed and periodic. Finally, let's review again this beautiful and regular motion below. I think the interesting part is that after adding a feedback driver, the original chaotic system can return to an orderly motion. Thanks to the feedback from gravity, the system finally converges to a stable and harmonious motion!
---