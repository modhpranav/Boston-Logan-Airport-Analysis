import React from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { Draggable } from 'gsap/Draggable';
import ScrollDownIndicator from '../../utils/scrollDownIndicator';

gsap.registerPlugin(Flip, Draggable);

export default function GetFare() {
    return (
        <div className="p-4 h-full mt-8 flex justify-center items-center">
  <div className="overflow-x-auto w-full">
  <iframe
          src="https://lookerstudio.google.com/embed/reporting/52098ce2-fc66-43ff-9496-0e837f97c97d/page/YY5zD"
          width="100%"
          height="100vh"
          style={{ border: 0, "height": "100vh" }}
          allowFullScreen
          title="Covid Impact Report"
        ></iframe>
  </div>
</div>
    );
}
