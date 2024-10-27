#include<bits/stdc++.h>
using namespace std;

int main() {
    string str;
    cin>>str;
    string vowels = "aeiou";
    unordered_set<char> v(vowels.begin(),vowels.end());
    unordered_map<string,int> mp;
    string ans="";
    string tmp ="";
    int i = 0;
    while(i<str.size()){
        if(str[i]==' ') {
            string filler = mp[tmp]>0? to_string(mp[tmp]): "";
            ans+= tmp +filler +" ";
            tmp = "";
            mp[tmp]++;
        } else if(v.count(str[i])){
            tmp+= str[i];
        }
        i++;
    }
    if(tmp!="") {
        string filler = mp[tmp]>0? to_string(mp[tmp]): "";
        ans+= tmp +  filler;
    }
    cout<<ans;
    return 0;
}