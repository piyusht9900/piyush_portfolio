import React from "react";

export default function VideoSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center">
      <h2 className="text-3xl font-semibold mb-4">Demo Video</h2>
      <div className="flex justify-center">
        <video width="640" controls className="rounded-lg shadow-lg">
          <source src="/portfoilio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
