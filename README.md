To run:

`npm install; npm start`

This prototype simulates the bixbydevelopers.com site. There is a sidebar that simulates navigating to different pages within the site. It seems like the best way to use react-router is to use routes at the top level for new pages. This refers to pages that are made up of different components, not routing hierarchy. `/teams/:teamId/capsules` uses different components than `/teams/:teamId/capsules/:capsuleId`, so these are different at the top level. However, `/teams/:teamId/capsules`, `/teams/:teamId/info` and `/teams/:teamId/people` all share similar components, so they can be on the same level.
