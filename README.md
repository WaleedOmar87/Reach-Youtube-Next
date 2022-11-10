# Youtube API Example Next

> An Example of using Youtube API with React/Nextjs, this demo was built with Typescript, Next and React.

## Pre-install

> You need to create and .env file and add the following parameters to the file.

-   Your Youtube API key, `YOUTUBE_API_KEY=YOUR_KEY`
-   Local Node API for fetching videos from youtube, `LOCAL_API=http://localhost:3000/api/videos`
-   ENABLE_FALLBACK, The application will fetch local data stores in `__mocks__` instead of showing error message, You can set this to true to avoid consuming your API quota.

## Install

-   Clone or download this repo to your local server
-   Run `npm install` command to install dependencies
-   Run `npm run dev` to start development server on port 3000
-   If port 3000 is not available, You can add another port in package.json under `scripts`, for example update `next dev` to `next dev -p 8080`.
-   run `npm run build` to build the app

## Local API

-   API configurations are located in `config/index.ts`, you can edit `api` and add you local api if you're using a different port other than `3000`
-   You can also change `defaultSearchTerm` to any other string.

#### Local API Parameters

-   `q` search query passed to the api.
-   `filter` date filter parameter using to fetch videos from last day, last week or last month
-   Example API Call to fetch videos from last day, week or month.
    > GET http://localhost:3000/api/videos?q=reactjs&filter=lastWeek

    > GET http://localhost:3000/api/videos?q=reactjs&filter=lastWeek

    > GET http://localhost:3000/api/videos?q=reactjs&filter=lastMonth

## API Fallback

-   API is configured to use local data stored in `__mocks__/data.json` if the API call fails for whatever reason,
    for example quote exceeded, Check `Pre-Install` section above.

## Packages Used

-   React, Next, Jest and React Testing Library
