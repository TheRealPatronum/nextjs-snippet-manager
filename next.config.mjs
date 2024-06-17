/** @type {import('next').NextConfig} */
import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl();

export default withNextIntl({
  reactStrictMode: false
});