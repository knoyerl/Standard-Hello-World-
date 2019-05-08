# Programming 101 notes
    
## Some standard git commands     
    
### Clone a repo     
```    
git clone [url]
```      
Where [url] is the url to the github repo you want to work in.    
    
### Create a feature branch    
When cloning a repository, you will start on that repository's default branch (typically master), so you will want to `checkout` a different branch.  You may even need to create a new branch, and check that out.     
```
git checkout -b feature/my-feature   
```    
The `-b` flag indicates that you want this to be a new branch.    

### Add new files to git tracking    
```    
git add . 
```    
   
### View what changed    
```     
git diff    
```     

### Package up a commit    
```    
git commit -am "Some description of the changes in this commit"
```     

### Push local commits to the remote repository    
```    
git push    
```    

### More info    
More info on git commands can be found [here](https://git-scm.com/docs)

    
     
## Documenting your project using markdown   

It is always very helful to include a `README.md` file at the root of your project.  Typically this file includes things like:    
* Project Name and Description      
* Any Prerequisites needed for working with your project     
* Helpful notes and rules     
* etc...     
         
There are lots of useful cheatsheets out there for markdown syntax.  Check [this](https://github.com/knoyerl/Standard-Hello-World-/tree/feature/brad) one out.   
    
    
    

