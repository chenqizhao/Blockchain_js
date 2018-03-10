const Block = require('./block')

const firstBlock = Block.mineBlock(Block.genesis(), 'first');

console.log(firstBlock.toString()) 