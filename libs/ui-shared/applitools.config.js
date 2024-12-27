module.exports = {
    // Specify the number of visual checkpoints Applitools will perform in parallel.
    testConcurrency: 5,

    batchName: 'Cypress Quickstart',

    // Select the browsers and devices to run your tests on via the Ultrafast Grid
    browser: [
        { width: 800, height: 600, name: 'chrome' },
        { width: 1600, height: 1200, name: 'firefox' },
        { width: 1024, height: 768, name: 'safari' },
        { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
        { deviceName: 'Nexus 10', screenOrientation: 'landscape' }
    ]
};
