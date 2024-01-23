# Website Design and Implementation

This repository contains the source code for Elise Grimm's website.

## Project Overview

Elise Grimm is a trained clinical psychologist and psychotherapist who specialises in the treatment of emotional
disorders and cognitive-behavioural therapy (CBT).

She contacted me to design and code her professional website, allowing patients to get to know her services and get in touch
with her.

You can visit her website or get in touch with her on [https://elisegrimm.com](https://elisegrimm.com)

## Tech Stack

I fully designed and implemented her website using:

-   HTML/CSS/JavaScript
-   Sass
-   JS Libraries:
    -   [Astro.js](https://astro.build/) (static site generation)
    -   [aos](https://michalsnik.github.io/aos/) (animations)
    -   [focus-trap](https://www.npmjs.com/package/focus-trap) (keyboard navigation)

## Getting Started

### Environment Variables

This project interacts with the [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key)
and requires two environment variables to setup in a `.env` file:

```bash
GOOGLEMAPS_APIKEY=xxx
MAP_ID=yyy
```

### Running the project locally

```bash
# Clone the repository
git clone https://github.com/Ivanho92/website-elisegrimm.git

# Navigate to the project directory
cd website-elisegrimm

# Install dependencies
npm install

# Run the project locally
npm run dev
```

### Generate Low Resolution Images

Every images inside /src/images/ must have a corresponding low resolution version.
This low resolution version is used and displayed while the full resolution image is being loaded.

In order to achieve that, this project includes the library [ffmpeg](https://ffmpeg.org/).

```bash
# Low resolution images are generated in /src/images/lowres/
npm run ffmpeg
```
