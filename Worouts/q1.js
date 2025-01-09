// auto complteion

class TrieNode{
    constructor(){
        this.children={}
        this.wordEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let current=this.root;
        for(let char of word){
            if(!current.children[char]){
                current.children[char]=new TrieNode();
            }
            current=current.children[char]
        }
        current.wordEnd=true;
    }
    autocomplete(prefix){
        let current=this.root;

        for(let char of prefix){
            if(!current.children[char]){
                return[];
            }
            current=current.children[char]
        }
        const words=[]
        const dfs=(node,path)=>{
              if(node.wordEnd){
                words.push(path)
              }
              for(let char in node.children){
                dfs(node.children[char],path+char)
              }
        }
        dfs(current,prefix);
        return words.sort()
    }
}


let trie= new Trie()

trie.insert("cartoon")
trie.insert("cart")
trie.insert("carry")
console.log(trie.autocomplete("ca"))
