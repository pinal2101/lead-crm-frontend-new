import React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function Loading({ size = "md", text = "Loading...", className = "" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-red-500`}
      />
      {text && (
        <p className="text-sm text-gray-600 font-medium">{text}</p>
      )}
    </div>
  );
}

export function LoadingPage({ text = "Loading...", className = "" }: Omit<LoadingProps, "size">) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <Loading size="lg" text={text} />
    </div>
  );
}

export function LoadingSpinner({ size = "md", className = "" }: Omit<LoadingProps, "text">) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-red-500 ${className}`}
    />
  );
} 