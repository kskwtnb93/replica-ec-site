import { css } from '@kuma-ui/core'

export default function SkeletonScreen() {
  return (
    <span
      className={css`
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #efefef;
        z-index: 0;
        overflow: hidden;

        &::before {
          content: '';
          display: block;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 1),
            transparent
          );
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: skeleton-animation 1s linear infinite;
          z-index: 0;
        }

        @keyframes skeleton-animation {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
    ></span>
  )
}
