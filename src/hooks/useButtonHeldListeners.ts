export const useButtonHeldListeners = (buttonId: string): (() => void) => {
  const button = document.getElementById(buttonId);

  const handleMouseDown = () => {
    button?.classList.add("held");
  };

  const handleMouseUp = () => {
    button?.classList.remove("held");
  };

  const handleMouseLeave = () => {
    button?.classList.remove("held");
  };

  button?.addEventListener("mousedown", handleMouseDown);
  button?.addEventListener("mouseup", handleMouseUp);
  button?.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    button?.removeEventListener("mousedown", handleMouseDown);
    button?.removeEventListener("mouseup", handleMouseUp);
    button?.removeEventListener("mouseleave", handleMouseLeave);
  };
};
