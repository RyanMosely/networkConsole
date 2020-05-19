from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from scripts import delay_speed
from scripts import addForward
# from scripts import delay_speed
from passlib.hash import sha256_crypt



app = Flask(__name__)
CORS(app)



@app.route('/test', methods=['GET'])
def helloWorld():
        with open('admin.json') as fi:
            data3 = json.load(fi)
        print(data3['administrator']['password'])
        return(data3)

@app.route('/osirisTest', methods=['GET'])
def osirisGet():
        with open('config.json') as fi:
            data3 = json.load(fi)
        print(data3['interface']['lan'][0]['ip'])


        # return(data3['interface']['lan'][0]['ip'])
        return(data3['interface']['lan'][0]['ip'])

@app.route('/dataTest', methods=['GET'])
def dataGet():
        # with open('settings.json') as fi:
        #     data3 = json.load(fi)
        # print(data3['interface']['lan'][0]['ip'])

        with open('config.json') as fi:
            data4 = json.load(fi)
        print(data4["dataRefreshDelay"])

        return(jsonify(data4["interface"]["dataRefreshDelay"]))



@app.route('/userChange', methods=['POST'])
def helloWorldd():
        print('something')
        with open('admin.json') as fi:
            data3 = json.load(fi)
            data4 = request.get_json()
            #print(data4['lastName'])

            data3['administrator']['username'] = data4['firstName']
        with open('admin.json', 'w') as outfile:
            json.dump(data3,outfile,indent = 4, sort_keys=True) 


            # attempted_username = request.form['firstName']
            # attempted_password = request.form['lastName']
        # print(jsonify(attempted_password))
        # print(jsonify(attempted_username))
        return(data3)

@app.route('/passChange', methods=['POST'])
def helloWorlddd():
        print('something')
        with open('settings.json') as fi:
            data3 = json.load(fi)
            data4 = request.get_json()
            print(data4['lastName'])

            data3['administrator']['password'] = data4['lastName']
        with open('settings.json', 'w') as outfile:
            json.dump(data3,outfile,indent = 4, sort_keys=True) 


            # attempted_username = request.form['firstName']
            # attempted_password = request.form['lastName']
        # print(jsonify(attempted_password))
        # print(jsonify(attempted_username))
        return(data3)

@app.route('/osirisChange', methods=['POST'])
def osiris():
        print('something')
        with open('config.json') as fi:
            data3 = json.load(fi)
            data4 = request.get_json()
            print(data4['osirisip'])
            print(data3['interface']['lan'][0]['ip'])

            data3['interface']['lan'][0]['ip'] = data4['osirisip']
        with open('config.json', 'w') as outfile:
            json.dump(data3,outfile,indent = 4, sort_keys=True) 


            # attempted_username = request.form['firstName']
            # attempted_password = request.form['lastName']
        # print(jsonify(attempted_password))
        # print(jsonify(attempted_username))
        return(data3['interface']['lan'][0]['ip'])

@app.route('/dataChange', methods=['POST'])
def dataRefresh():
        print('something')
        with open('config.json') as fi:
            data3 = json.load(fi)
            data4 = request.get_json()
            print(data4)
            print(data3['dataRefreshDelay'])

            data3["interface"]['dataRefreshDelay'] = data4['newData']
            print(data4)
        with open('config.json', 'w') as outfile:
            json.dump(data3,outfile,indent = 4, sort_keys=True) 

        return(data3["interface"]['dataRefreshDelay'])

##

@app.route('/haipe', methods=['POST'])
def configHaipe():
    data = request.get_json()
    with open('config.json') as f:
        data2 = json.load(f)
       
        data2['haipe'] = data
    with open('config.json', 'w') as outfile:
        json.dump(data2, outfile, indent=4, sort_keys=True)

    res = {'status': 'ok'}
    return jsonify(res)


@app.route('/nconfig', methods=['POST'])
def config():
    data = request.get_json()
    with open('config.json') as f:
        data2 = json.load(f)
        
        data2['interface']['wan'] = data
    with open('config.json', 'w') as outfile:
        json.dump(data2, outfile, indent=4, sort_keys=True)
    
    res = {'status': 'ok'}
    return jsonify(res)


@app.route('/nconfig', methods=['GET'])
def configr():
    with open('config.json') as fi:
        data3 = json.load(fi)
    return data3


@app.route('/getForwardConfig', methods=['GET'])
def ForwardConfigr():
    with open('config.json') as fi:
        data3 = json.load(fi)
       
    fi.close()
    return jsonify({"forward": data3['interface']['portForward']})


@app.route('/setForwardConfig', methods=['POST'])
def ForwardConfigw():
    # with open('config.json') as fi:
    #        data3 = json.load(fi)
    #        print(data3['interface']['portForward'])
    # return jsonify({"forward":data3['interface']['portForward']})
    dataf = request.get_json()
    if not dataf['port']:
        
        addForward.addForward(dataf["append"], [])
    else:
        
        addForward.addForward(dataf["append"], dataf["port"])
    res = {'status': 'ok'}
    return jsonify(res)


@app.route('/cData', methods=['GET'])
def pullCurrentLatencyThroughput():
    with open('config.json') as ft:
        configData = json.load(ft)
        # print(configData['interface'])
        #resultant = delay_speed.getConnectionDataRefresh(configData.interface.wan[0].proxyIP, configData.interface.wan[1].proxyIP, configData.interface.wan[2].proxyIP, configData.interface.wan[3].proxyIP, 500)
        #print(delay_speed.getConnectionDataRefresh('8.8.8.8', '8.8.8.8', '8.8.8.8', '8.8.8.8', 500 ))
        resultant = delay_speed.getConnectionDataRefresh(configData['interface']['wan'][0]['proxyIP'], configData['interface']['wan'][1]['proxyIP'], configData['interface']['wan'][2]['proxyIP'], configData['interface']['wan'][3]['proxyIP'], 500)
        return jsonify(resultant)

#@app.route('/test', methods=['GET'])
#def configAdmin():
 #   with open('admin.json') as fi:
  #      dataA = json.load(fi)
   #     print(dataA)
    #return dataA

@app.route('/testTwoo', methods=['POST'])
def configAdminW():
    print("blahblahblah")
    with open('admin.json') as fi:
       dataA = json.load(fi)
       dataC=request.get_json()
       dataA["administrator"]["password"]=dataC["lastName"]
       dataA["administrator"]["password"]=sha256_crypt.hash(dataC["lastName"])
    with open('admin.json', 'w') as outfile:
       json.dump(dataA, outfile, indent=4, sort_keys=True)
    #    print(sha256_crypt.verify(dataC["password"],dataA["administrator"]["password"]))
       print(dataA)
       return dataA


@app.route('/login', methods=['POST'])
def login():
    with open('admin.json') as fi:
        storedValues=json.load(fi)
        loginValues=request.get_json()
        encryptStorePW = storedValues["administrator"]["password"]
        
        if storedValues["administrator"]["username"]==loginValues["username"]:
            print("Stored Value:" + encryptStorePW)
            print("Incoming Value:" + sha256_crypt.hash(loginValues["password"]))
            if sha256_crypt.verify(loginValues["password"], encryptStorePW):
                return "success"
            else:
                return "passError"
        else:
            return "userError"
    
    



if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
