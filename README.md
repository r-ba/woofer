# woofer

[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/r-ba/woofer/master/LICENSE)

Add a minimalistic live chat window to your project.

![Woofer screenshot](https://i.ibb.co/sKpQbPf/woofer.jpg)

A live demo of woofer can be found in the bottom right corner of my [portfolio](https://www.r-ba.dev).


### Usage

Woofer was designed to be used in projects without a framework. However for React projects it should be fairly straightforward to modify so that you may import `ui/src/App.js` as a component. In either case the following setup is necessary to be fully functional:

In `ui/src/chatAPI.js` you must point `openSocket` towards the appropriate endpoint which handles socket.io requests, and `fetchAgentInfo` towards the appropriate endpoint that returns a JSON object which looks like:
```json
{
  name: "Agent Name",
  icon: "https://yourdomain.com/icon.png"
}
```

On the backend, you must define socket handlers for recieving `consumer-message` events, and for emitting the `agent-message` and `agent-status` events. An example of such a backend can be found in [demo](https://github.com/r-ba/woofer/tree/master/demo), which utilizes Discord's API for all the heavy lifting.

For frameworkless projects, after completing the above setup you're ready to build the project with `npm run build` (note that this requires `react-scripts` to be installed on your machine). Alternatively, you may use the prebuilt files found in [dist](https://github.com/r-ba/woofer/tree/master/dist) by configuring the appropriate endpoints in `dist/config.js`.

### Contributing

If you have an idea for a feature that would enhance woofer, please feel free to create an issue or submit a pull request.
