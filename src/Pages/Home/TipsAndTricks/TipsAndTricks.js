import React from "react";

const TipsAndTricks = () => {
  return (
    <div>
        <div className="flex flex-col w-full border-opacity-50">
        <div className="divider font-bold">SMARTPHONE TIPS AND TRICKS</div>
      </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="overflow-scroll mx-5 my-9">
            <h5 className="text-2xl text-center">Use Digital Wellbeing Features</h5>
            <p>It’s not the healthiest thing in the world to stay up all night texting and doomscrolling. Android's Bedtime mode is part Google's Digital Wellbeing initiative. Not only does it silence your phone at a set time, it also changes the screen to grayscale, in case you must look at the screen after hours. You can also swap to Dark Theme during Bedtime mode, or just outright set your phone screen dark and enjoy some peace. There’s a Pause option in the dropdown menu if you need more time before retiring.</p>
            <p>Another recommended Wellbeing feature is Focus mode, which silences noisy apps’ notifications for an allotted time that you schedule. Some phones, including recent Pixels and Motorolas, turn on Do Not Disturb mode when you set them down with the screen facing down—a quick and easy way to get relief from disturbances. Finally, using Work Profile hides all those productivity apps when it’s time to relax.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="overflow-scroll mx-5 my-9">
            <h5 className="text-2xl text-center">Install Antivirus</h5>
            <p>Since Android is far more open than iOS—that is, more like Windows than macOS—it’s also more open to malware attacks. Google has built in a lot of strong protections, but we recommend you run an antivirus app on Android. PCMag security guru Neil Rubenking recommends four PCMag Editors’ Choice options: Bitdefender Total Security, Kaspersky Security Cloud, Norton 360 Deluxe, and McAfee AntiVirus Plus. Most of these also cover your desktop devices. They make sure you’re not installing bad apps and run regular malware scans. They also prevent thieves from simply swapping your phone’s SIM card to gain access. Some also include VPN protection.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="overflow-scroll mx-5 my-9">
            <h5 className="text-2xl text-center">Turn on Find My Device</h5>
            <p>If you misplace your phone or it gets stolen, both mobile OSes have features that help you locate it on a map. Not only that, but these also Find My services let you disable the phone, wipe it, and play a sound on it. Apple’s mobile operating system goes a little further by letting you display your number or another message on the screen of the lost device, something we don't see why Google hasn't added.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TipsAndTricks;
