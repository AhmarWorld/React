import "./TitleSection.css";
import TitleCard from "../../TitleCard/TitleCard";

export default function TitleSection() {
  return (
    <section className="home_one">
      <div className="home_one-left">
        <svg
          className="one_curly"
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="17"
          viewBox="0 0 101 17"
          fill="none"
        >
          <path
            d="M26.2609 4.32287L38.3456 17L50.5232 4.32287L62.6544 17L74.7391 4.32287L86.8702 17L101 2.23427L98.8155 0L86.8702 12.4828L74.925 0L74.7391 0.194298L74.5996 0L62.6544 12.4828L50.6627 0L50.5232 0.194298L50.3373 0L38.3456 12.4828L26.4004 0L26.2609 0.194298L26.075 0L14.1298 12.4828L2.18454 0L0 2.23427L14.1298 17L26.2609 4.32287Z"
            fill="#20AD96"
          />
        </svg>
        <TitleCard
          textOne="Proven strategies backed by science for success."
          textTwo="Live life at the full potential"
          textThree="I help people to discover their true potential and live a fulfilling life...
                Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
          value="Get your free guide now"
        />
      </div>
      <div className="home_one-right">
        <div className="success-rate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <g clip-path="url(#clip0_0_5749)">
              <path
                d="M39.5497 16.4507C45.9283 22.8292 45.9283 33.1709 39.5497 39.5495C33.1712 45.928 22.8295 45.928 16.4509 39.5495C10.0724 33.1709 10.0724 22.8292 16.4509 16.4507C22.8295 10.0721 33.1712 10.0721 39.5497 16.4507Z"
                stroke="#20AD96"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.2995 24.7001C33.122 26.5225 33.122 29.4773 31.2995 31.2998C29.4771 33.1222 26.5223 33.1222 24.6998 31.2998C22.8774 29.4773 22.8774 26.5225 24.6998 24.7001C26.5223 22.8776 29.4771 22.8776 31.2995 24.7001"
                stroke="#333461"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 49.0001V39.6667"
                stroke="#20AD96"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 7V16.3333"
                stroke="#20AD96"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3333 28H7"
                stroke="#20AD96"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M49.0003 28H39.667"
                stroke="#20AD96"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_5749">
                <rect width="56" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            <h4>100%</h4>
            <p>Success rate this year</p>
          </div>
        </div>
        <div className="title_person-img"></div>
      </div>
    </section>
  );
}
