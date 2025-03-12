import { Sen } from 'next/font/google'

// Load Sen font with specific subsets and weights
export const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  // This makes the font files be included in your app bundle
  // rather than loaded from Google servers
  display: 'swap',
  variable: '--font-sen',
})
