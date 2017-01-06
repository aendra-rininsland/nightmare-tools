# Nightmare.js Tools
## 2016 Ændrew Rininsland

This is a collection of tools for using Nightmare.js with `async/await`.

It assumes you're using Node 7+ (with `--harmony` flag).

## API

### async series(items: []<string>, callback: function)
  _Process a queue of items one after another._

  Each URL is passed to `callback`. The result is then awaited before
  moving on to the next array element.

### async parallel(items: []<string>, callback: function)
  _Process a queue of items simultaneously._

  `callback` is called for each element in array at the same time. The result of each `callback`
  call is awaited and then returned.

### async batch(items: []<string>, concurrency: number = 5, callback: function)
  _Process a queue of items in parallel._

  A batch of items (defined by `concurrency`, defaulting to 5) is passed to `callback`, the
  results of which are then awaited before moving onto the next batch.
