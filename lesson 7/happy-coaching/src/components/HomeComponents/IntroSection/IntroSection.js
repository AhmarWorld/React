import "./IntroSection.css";
import CouchingCard from "../../CouchingCard/CouchingCard";

export default function IntroSection() {
  return (
    <section className="home_intro">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="101"
        height="17"
        viewBox="0 0 101 17"
        fill="none"
      >
        <path
          d="M26.2609 4.32287L38.3456 17L50.5232 4.32287L62.6544 17L74.7391 4.32287L86.8702 17L101 2.23427L98.8155 0L86.8702 12.4828L74.925 0L74.7391 0.194298L74.5996 0L62.6544 12.4828L50.6627 0L50.5232 0.194298L50.3373 0L38.3456 12.4828L26.4004 0L26.2609 0.194298L26.075 0L14.1298 12.4828L2.18454 0L0 2.23427L14.1298 17L26.2609 4.32287Z"
          fill="#3F3A64"
        />
      </svg>
      <div className="intro_title">
        <h1>I can help you in these particular areas.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam. <br /> <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="intro_card">
        <CouchingCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <g clip-path="url(#clip0_0_5702)">
                <path
                  d="M27 12V66M18 12H51C52.5913 12 54.1174 12.6321 55.2426 13.7574C56.3679 14.8826 57 16.4087 57 18V54C57 55.5913 56.3679 57.1174 55.2426 58.2426C54.1174 59.3679 52.5913 60 51 60H18C17.2044 60 16.4413 59.6839 15.8787 59.1213C15.3161 58.5587 15 57.7956 15 57V15C15 14.2044 15.3161 13.4413 15.8787 12.8787C16.4413 12.3161 17.2044 12 18 12V12Z"
                  stroke="#3F3A64"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39 24H45"
                  stroke="#20AD96"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39 36H45"
                  stroke="#20AD96"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_5702">
                  <rect width="72" height="72" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="1:1 Coaching"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
        />
        <CouchingCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <g clip-path="url(#clip0_0_5712)">
                <path
                  d="M62.25 45.5L52.5 35.75H29.75C28.888 35.75 28.0614 35.4076 27.4519 34.7981C26.8424 34.1886 26.5 33.362 26.5 32.5V13C26.5 12.138 26.8424 11.3114 27.4519 10.7019C28.0614 10.0924 28.888 9.75 29.75 9.75H59C59.862 9.75 60.6886 10.0924 61.2981 10.7019C61.9076 11.3114 62.25 12.138 62.25 13V45.5Z"
                  stroke="#3F3A64"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.5 48.75V55.25C39.5 56.112 39.1576 56.9386 38.5481 57.5481C37.9386 58.1576 37.112 58.5 36.25 58.5H13.5L3.75 68.25V35.75C3.75 34.888 4.09241 34.0614 4.7019 33.4519C5.3114 32.8424 6.13805 32.5 7 32.5H13.5"
                  stroke="#20AD96"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_5712">
                  <rect
                    width="78"
                    height="78"
                    fill="white"
                    transform="translate(-6)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          title="Consultation"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
        />
        <CouchingCard
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <g clip-path="url(#clip0_0_5721)">
                <path
                  d="M21 21C24.3137 21 27 18.3137 27 15C27 11.6863 24.3137 9 21 9C17.6863 9 15 11.6863 15 15C15 18.3137 17.6863 21 21 21Z"
                  stroke="#20AD96"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 66V51L12 48V36C12 35.2044 12.3161 34.4413 12.8787 33.8787C13.4413 33.3161 14.2044 33 15 33H27C27.7956 33 28.5587 33.3161 29.1213 33.8787C29.6839 34.4413 30 35.2044 30 36V48L27 51V66"
                  stroke="#20AD96"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M51 21C54.3137 21 57 18.3137 57 15C57 11.6863 54.3137 9 51 9C47.6863 9 45 11.6863 45 15C45 18.3137 47.6863 21 51 21Z"
                  stroke="#3F3A64"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45 66V54H39L45 36C45 35.2044 45.3161 34.4413 45.8787 33.8787C46.4413 33.3161 47.2044 33 48 33H54C54.7956 33 55.5587 33.3161 56.1213 33.8787C56.6839 34.4413 57 35.2044 57 36L63 54H57V66"
                  stroke="#3F3A64"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_5721">
                  <rect width="72" height="72" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Group Coaching Sessions"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
        />
      </div>
    </section>
  );
}
