# Google Maps Panorama Backend

> ViteJS backend to enable Google Maps API functionality (street view) into Nos Album.
> UofTHacks XI submission by Carl Wang and Kenny Zhao.

[<img src="https://img.shields.io/badge/Devpost-003E54?style=for-the-badge&logo=Devpost&logoColor=white" />](https://devpost.com/software/nos-album?ref_content=my-projects-tab&ref_feature=my_projects)

## How to Start this Project (Start this before Nos Album)

0. Install node modules

```
npm i
```

1. Obtain a Google Maps API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key) and paste it in `index.html` script tag:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initialize&v=weekly"
  defer
></script>
```

3. Start the server at port XXXX, hosting the server to the network

```
npm start -- --port=XXXX --host
```

3. Note down the network API and paste it into Nos Album
```
VITE v5.0.12  ready in 1134 ms

  ➜  Local:   https://localhost:8080/
  ➜  Network: https://100.65.3.27:8080/ <- Copy this to Nos Album
  ➜  press h + enter to show help
```

## Project Roadmap
- [ ] Encapsulate API key for project security
- [ ] Optimize vertical mobile view in street view
- [ ] Investigate auto-enable motion tracking on mobile devices without having a user to manually enable it
