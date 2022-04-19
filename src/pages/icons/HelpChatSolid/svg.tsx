import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96 155C136.317 155 169 125.899 169 90C169 54.1015 136.317 25 96 25C55.6832 25 23 54.1015 23 90C23 103.809 27.836 116.612 36.0823 127.14C35.9462 127.41 35.8288 127.694 35.7322 127.99L25.4473 159.58C24.4214 162.731 26.1441 166.117 29.295 167.143C30.5501 167.551 31.8426 167.524 33.0083 167.144C33.779 167.066 34.5472 166.836 35.2702 166.443L65.7298 149.868C65.9686 149.738 66.195 149.594 66.4087 149.438C75.4535 153.013 85.4662 155 96 155ZM86.9375 101.797V105.266H99.3594V102.453C99.3594 100.578 99.75 99.0625 100.531 97.9062C101.344 96.75 103.25 95.0625 106.25 92.8438C110.625 89.7188 113.594 86.9062 115.156 84.4062C116.719 81.9062 117.5 78.9375 117.5 75.5C117.5 70.3438 115.594 66.2188 111.781 63.125C108 60.0312 102.891 58.4844 96.4531 58.4844C88.6406 58.4844 81.25 60.4375 74.2812 64.3438L79.3906 74.6094C85.3906 71.5469 90.7344 70.0156 95.4219 70.0156C98.1094 70.0156 100.203 70.5469 101.703 71.6094C103.203 72.6719 103.953 74.2188 103.953 76.25C103.953 78.0625 103.422 79.7031 102.359 81.1719C101.328 82.6406 99.1719 84.5469 95.8906 86.8906C92.4844 89.3906 90.1406 91.75 88.8594 93.9688C87.5781 96.1875 86.9375 98.7969 86.9375 101.797ZM87.5469 115.344C86.1406 116.688 85.4375 118.672 85.4375 121.297C85.4375 123.828 86.1562 125.797 87.5938 127.203C89.0312 128.578 91.0625 129.266 93.6875 129.266C96.25 129.266 98.25 128.562 99.6875 127.156C101.125 125.719 101.844 123.766 101.844 121.297C101.844 118.734 101.125 116.766 99.6875 115.391C98.2812 114.016 96.2812 113.328 93.6875 113.328C91 113.328 88.9531 114 87.5469 115.344Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96 25.5C55.9032 25.5 23.5 54.4306 23.5 90C23.5 103.689 28.2932 116.385 36.476 126.832L36.6717 127.082L36.5288 127.365C36.404 127.613 36.2963 127.873 36.2077 128.145L25.9227 159.735C24.9823 162.623 26.5614 165.727 29.4498 166.667C30.6009 167.042 31.7849 167.017 32.8533 166.668L32.9045 166.652L32.9581 166.646C33.6637 166.575 34.3677 166.365 35.0312 166.004L65.4908 149.429C65.7101 149.309 65.9178 149.177 66.1137 149.034L66.3362 148.872L66.5925 148.973C75.5789 152.525 85.5292 154.5 96 154.5C136.097 154.5 168.5 125.569 168.5 90C168.5 54.4306 136.097 25.5 96 25.5ZM22.5 90C22.5 53.7724 55.4632 24.5 96 24.5C136.537 24.5 169.5 53.7724 169.5 90C169.5 126.228 136.537 155.5 96 155.5C85.5002 155.5 75.5126 153.538 66.475 150.001C66.3124 150.11 66.1436 150.212 65.9688 150.307L35.5092 166.882C34.7435 167.299 33.9297 167.546 33.1121 167.635C31.8625 168.032 30.481 168.055 29.1402 167.618C25.7267 166.507 23.8605 162.839 24.9718 159.425L35.2568 127.836C35.3273 127.619 35.4082 127.408 35.4987 127.204C27.3046 116.642 22.5 103.823 22.5 90ZM74.942 64.5492L79.6141 73.9362C85.4751 71.0032 90.748 69.5156 95.4219 69.5156C98.1673 69.5156 100.377 70.0572 101.992 71.2014C103.64 72.3685 104.453 74.0764 104.453 76.25C104.453 78.1665 103.889 79.9087 102.767 81.462C101.682 83.0054 99.4648 84.9519 96.1839 87.2956C92.8032 89.7771 90.5233 92.0871 89.2924 94.2188C88.062 96.3494 87.4375 98.8695 87.4375 101.797V104.766H98.8594V102.453C98.8594 100.512 99.2636 98.8893 100.117 97.6263L100.122 97.6187C100.987 96.3873 102.958 94.6566 105.953 92.4417L105.959 92.4368C110.318 89.3238 113.222 86.5572 114.732 84.1413C116.237 81.7331 117 78.8596 117 75.5C117 70.4857 115.155 66.5067 111.466 63.5133L111.465 63.512C107.798 60.5117 102.812 58.9844 96.4531 58.9844C88.8835 58.9844 81.7154 60.8377 74.942 64.5492ZM74.0368 63.9076C81.0784 59.9605 88.553 57.9844 96.4531 57.9844C102.969 57.9844 108.202 59.5506 112.097 62.7374C116.033 65.9314 118 70.2021 118 75.5C118 79.0154 117.2 82.0794 115.58 84.6712C113.966 87.2547 110.934 90.1123 106.544 93.2483C103.544 95.4672 101.704 97.1094 100.943 98.1901C100.235 99.2393 99.8594 100.647 99.8594 102.453V105.766H86.4375V101.797C86.4375 98.7242 87.0942 96.0256 88.4264 93.7187C89.7576 91.4134 92.1644 89.0053 95.5948 86.4875L95.6 86.4838C98.8782 84.1422 100.972 82.2778 101.95 80.8846L101.954 80.8788C102.955 79.4953 103.453 77.9572 103.453 76.25C103.453 74.3611 102.766 72.9752 101.414 72.0174C100.029 71.0366 98.0515 70.5156 95.4219 70.5156C90.8403 70.5156 85.5762 72.0135 79.6179 75.0547L79.1681 75.2843L73.6215 64.1404L74.0368 63.9076ZM93.6875 113.828C91.0789 113.828 89.1749 114.48 87.8923 115.705C86.6156 116.925 85.9375 118.759 85.9375 121.297C85.9375 123.729 86.6248 125.555 87.9413 126.844C89.259 128.103 91.1501 128.766 93.6875 128.766C96.1555 128.766 98.0156 128.091 99.3358 126.801C100.659 125.477 101.344 123.662 101.344 121.297C101.344 118.829 100.654 117.007 99.3419 115.752L99.3379 115.748C98.0519 114.491 96.1936 113.828 93.6875 113.828ZM87.2014 114.982C88.7314 113.52 90.9211 112.828 93.6875 112.828C96.3677 112.828 98.5087 113.54 100.035 115.031C101.596 116.526 102.344 118.64 102.344 121.297C102.344 123.868 101.592 125.959 100.041 127.51L100.037 127.514C98.4825 129.035 96.3432 129.766 93.6875 129.766C90.9761 129.766 88.8054 129.054 87.2481 127.564L87.2441 127.561C85.687 126.037 84.9375 123.926 84.9375 121.297C84.9375 118.585 85.6657 116.45 87.2014 114.982Z'
    />
  </svg>
);
