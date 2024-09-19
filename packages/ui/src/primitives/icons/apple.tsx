import { Icon, type IconProps } from './icon';

export default function Apple(props: IconProps) {
  return (
    <Icon {...props}>
      <svg viewBox='0 0 20 20'>
        <path
          d='M17.6219 6.81868C17.5059 6.90869 15.4577 8.06281 15.4577 10.6291C15.4577 13.5974 18.064 14.6475 18.142 14.6735C18.13 14.7375 17.7279 16.1116 16.7678 17.5118C15.9117 18.7439 15.0177 19.974 13.6575 19.974C12.2974 19.974 11.9474 19.1839 10.3772 19.1839C8.84709 19.1839 8.30304 20 7.05892 20C5.81479 20 4.9467 18.8599 3.9486 17.4597C2.79249 15.8156 1.8584 13.2613 1.8584 10.8371C1.8584 6.9487 4.38665 4.88649 6.8749 4.88649C8.19703 4.88649 9.29914 5.75458 10.1292 5.75458C10.9192 5.75458 12.1514 4.83448 13.6555 4.83448C14.2256 4.83448 16.2738 4.88649 17.6219 6.81868ZM12.9415 3.18832C13.5635 2.45025 14.0036 1.42614 14.0036 0.40204C14.0036 0.260026 13.9916 0.116012 13.9656 0C12.9535 0.0380038 11.7493 0.674068 11.0233 1.51615C10.4532 2.16422 9.9212 3.18832 9.9212 4.22642C9.9212 4.38244 9.9472 4.53845 9.95925 4.58846C10.0232 4.60046 10.1272 4.61446 10.2312 4.61446C11.1393 4.61446 12.2814 4.0064 12.9415 3.18832Z'
          className='fill-[var(--cl-light,black)_var(--cl-dark,white)]'
        />
      </svg>
    </Icon>
  );
}