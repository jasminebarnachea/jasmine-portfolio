type BB8ThemeToggleProps = {
  dark: boolean;
  onChange: (dark: boolean) => void;
};

export default function BB8ThemeToggle({ dark, onChange }: BB8ThemeToggleProps) {
  return <label className="bb8-toggle" title={dark ? "Switch to light mode" : "Switch to dark mode"}>
    <span className="sr-only">{dark ? "Use light mode" : "Use dark mode"}</span>
    <input
      className="bb8-toggle__checkbox"
      type="checkbox"
      checked={dark}
      onChange={(event) => onChange(event.target.checked)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    />
    <span className="bb8-toggle__container" aria-hidden="true">
      <span className="bb8-toggle__scenery">
        {Array.from({ length: 7 }, (_, index) => <i className={`bb8-toggle__star star-${index + 1}`} key={index} />)}
        <i className="bb8-toggle__sun" />
        <i className="bb8-toggle__planet" />
        <i className="bb8-toggle__cloud cloud-1" />
        <i className="bb8-toggle__cloud cloud-2" />
      </span>
      <span className="bb8">
        <span className="bb8__head-container">
          <i className="bb8__antenna antenna-1" />
          <i className="bb8__antenna antenna-2" />
          <i className="bb8__head" />
        </span>
        <i className="bb8__body" />
      </span>
      <i className="bb8__shadow" />
    </span>
  </label>;
}
