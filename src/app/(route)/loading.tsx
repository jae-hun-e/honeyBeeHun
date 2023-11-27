"use client";
import Lottie from "lottie-react";
import loadingAnimation from "@public/loading.json";
export default function Loading() {
  return (
    <div className="h-[100vh]">
      <Lottie animationData={loadingAnimation} className="h-full" />
    </div>
  );
}
