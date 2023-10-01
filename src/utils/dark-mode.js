const themeToggleButns = () => {
  const themeToggleBtn = $("#theme-toggle");
  // Get theme from localStorage
  const theme = localStorage.getItem("theme");
  // Apply theme on mount
  theme && $("body").addClass(theme);

  // Handle theme toggle
  const handleThemeToggle = () => {
    $("body").toggleClass("light-mode");
    if ($("body").hasClass("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      $("body").removeAttr("class");
    }
  };

  // Add click event listener to theme toggle button
  themeToggleBtn.on("click", handleThemeToggle);
};

export default themeToggleButns;
