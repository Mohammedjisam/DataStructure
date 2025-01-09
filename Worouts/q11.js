//trie

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

    search(word){
        let current=this.root;

        for(let char of word){
            if(!current.children[char]){
                return false
            }
            current=current.children[char]
        }
        return current.wordEnd;
    }

    delete(word,node=this.root,depth=0){
        if(!node){
            return false;
        }
        if(depth===word.length){
            if(!node.wordEnd){
                return false
            }
            node.wordEnd=false
            return Object.keys(node.children).length===0;
        }
        let char = word[depth];
        if(!node.children[char]){
            return false
        }
        let shouldRemove=this.delete(word,node.children[char],depth+1)

        if(shouldRemove){
            delete node.children[char]
        }
        return Object.keys(node.children).length===0&&!node.wordEnd;
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
console.log(trie.search("cartoon"))
console.log(trie.autocomplete("ca"))
