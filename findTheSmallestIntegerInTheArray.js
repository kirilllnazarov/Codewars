class SmallestIntegerFinder {
    findSmallestInt(args) {
        let minToMax = args.sort((a,b) => a-b)
      return minToMax[0]
    }
  }