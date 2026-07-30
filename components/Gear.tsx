import Image from "next/image";

const devices = [
  {
    name: "MacBook Air (M1, 2020)",
    slug: "macbook-air",
    image: "/gear/macbook-air-m1-2020.png",
    href: "https://support.apple.com/en-us/111883",
    specs: "Apple M1 · 13.3-inch Retina display · 8GB unified memory · up to 18-hour battery",
  },
  {
    name: "iPhone 13",
    slug: "iphone-13",
    image: "/gear/iphone-13-front-transparent.png",
    href: "https://support.apple.com/en-us/111872",
    specs: "A15 Bionic · 6.1-inch Super Retina XDR · dual 12MP cameras · IP68",
  },
  {
    name: "iPhone XR",
    slug: "iphone-xr",
    image: "/gear/iphone-xr-front-transparent.png",
    href: "https://support.apple.com/en-us/111868",
    specs: "A12 Bionic · 6.1-inch Liquid Retina HD · 12MP Wide camera · IP67",
  },
];

export default function Gear() {
  return <section id="gear" className="section gear-section">
    <div className="section-head"><span className="section-title">06 — Gear · Devices</span></div>
    <div className="gear-grid">{devices.map((device) => <a className={`gear-card gear-card--${device.slug}`} href={device.href} target="_blank" rel="noreferrer" key={device.name}>
      <span className="gear-image"><Image src={device.image} width={942} height={598} alt={device.name} /></span>
      <span className="gear-copy"><span><strong>{device.name}</strong><i aria-hidden="true">↗</i></span><small>{device.specs}</small></span>
    </a>)}</div>
  </section>;
}
